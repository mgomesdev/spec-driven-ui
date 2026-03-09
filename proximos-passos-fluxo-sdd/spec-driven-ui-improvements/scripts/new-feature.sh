#!/bin/bash
# scripts/new-feature.sh
# Uso: bash scripts/new-feature.sh nome-da-feature

set -e

FEATURE=${1:?"Uso: bash scripts/new-feature.sh nome-da-feature"}
DIR="specs/features/$FEATURE"
TMPL=".agent/templates"

if [ -d "$DIR" ]; then
  echo "❌ Feature '$FEATURE' já existe em $DIR"
  exit 1
fi

mkdir -p "$DIR"

cp "$TMPL/research.template.md"  "$DIR/research.md"
cp "$TMPL/plan.template.md"      "$DIR/plan.md"
cp "$TMPL/tasks.template.md"     "$DIR/tasks.md"

cat > "$DIR/progress.md" << EOF
# Progress: $FEATURE

## Padrões confirmados

<!-- Padrões descobertos durante a implementação (máx 20 linhas) -->

## Histórico recente

<!-- Últimas 3 tasks implementadas -->
EOF

cat > "$DIR/$FEATURE.feature" << EOF
# language: pt

Funcionalidade: $FEATURE
  Como [persona]
  Quero [ação]
  Para [valor]

  @US-001 @smoke
  Cenário: [Happy path]
    Dado [contexto]
    Quando [ação]
    Então [resultado]
EOF

cat > "$DIR/cross-check.md" << EOF
# Cross-check: $FEATURE

## Status: ⏳ Pendente

> Executar skill cross-check após aprovação das tasks.
EOF

# Atualizar INDEX.md
INDEX="specs/INDEX.md"
if [ ! -f "$INDEX" ]; then
  echo "# Índice de Features\n\n| Feature | Status | Data |\n|---------|--------|------|\n" > "$INDEX"
fi

DATE=$(date +%Y-%m-%d)
echo "| $FEATURE | 🔄 Em andamento | $DATE |" >> "$INDEX"

echo ""
echo "✅ Feature '$FEATURE' criada em $DIR"
echo ""
echo "Próximos passos:"
echo "  1. Preencha o briefing e acione: 'gere o research para $FEATURE'"
echo "  2. Após aprovar: 'gere os cenários gherkin para $FEATURE'"
echo "  3. Após aprovar: 'gere o plan para $FEATURE'"
echo "  4. Após aprovar: 'gere as tasks para $FEATURE'"
echo "  5. Após aprovar: 'execute o cross-check da $FEATURE'"
echo "  6. Após aprovar: 'execute as tasks da $FEATURE'"
