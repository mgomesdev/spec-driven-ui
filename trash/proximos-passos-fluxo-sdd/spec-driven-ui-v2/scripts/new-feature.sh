#!/bin/bash
# scripts/new-feature.sh
# Uso: bash scripts/new-feature.sh nome-da-feature
# Lê PROJECT.config.md para estrutura — não hardcode caminhos aqui.

set -e

FEATURE=${1:?"Uso: bash scripts/new-feature.sh nome-da-feature"}
DIR="specs/features/$FEATURE"
TMPL=".agent/templates"
INDEX="specs/INDEX.md"

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
<!-- Limite: [tokens].progress_max linhas. Acima → destilar. -->

## Padrões confirmados
<!-- máx [progress].confirmed_patterns_max linhas -->

## Histórico recente
<!-- últimas [progress].max_lines_per_task linhas por task -->
EOF

cat > "$DIR/$FEATURE.feature" << EOF
# language: pt
# Config: [gherkin].language

Funcionalidade: $FEATURE
  Como [persona]
  Quero [ação]
  Para [valor]

  @US-001 @smoke
  Cenário: [happy path]
    Dado [contexto]
    Quando [ação]
    Então [resultado verificável]
EOF

cat > "$DIR/cross-check.md" << EOF
# Cross-check: $FEATURE

## Status: ⏳ Pendente

> Executar skill cross-check após aprovação das tasks.
> Checks ativos: ver [cross_check] em PROJECT.config.md
EOF

# Atualizar INDEX.md
if [ ! -f "$INDEX" ]; then
  printf "# Índice de Features\n\n| Feature | Status | Data | PR |\n|---------|--------|------|----|\n" > "$INDEX"
fi

DATE=$(date +%Y-%m-%d)
echo "| $FEATURE | 🔄 Em andamento | $DATE | — |" >> "$INDEX"

echo ""
echo "✅ Feature '$FEATURE' criada em $DIR"
echo ""
echo "Fluxo (ver [features] em PROJECT.config.md para o que está ativo):"
echo "  1. 'gere o research para $FEATURE'"
echo "  2. 'gere o gherkin para $FEATURE'"
echo "  3. 'gere o plan para $FEATURE'"
echo "  4. 'gere as tasks para $FEATURE'"
echo "  5. 'execute o cross-check de $FEATURE'"
echo "  6. 'execute as tasks de $FEATURE'"
