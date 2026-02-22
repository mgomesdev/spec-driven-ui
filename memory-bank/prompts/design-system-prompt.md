Limpe o contexto  e aja como um especialista em Design Systems. Extraia todo o conteúdo integral do memory-bank.md e reconstrua o Design System seguindo rigorosamente a arquitetura de Atomic Design declarada.

# Diretrizes de Extração

## Fidelidade 1:1
Processe cada ID (Atoms, Molecules, Organisms, Templates, Pages, Rules) em ordem sequencial. É terminantemente proibido o uso de valores genéricos ou 'placeholders'. Se o documento define um Border-Radius: 4px, não utilize rounded-md, mantendo a especificação técnica 1:1 de cada um.

## Exaustividade de Propriedades

Transcreva todos os tokens de design (Typography, Color Palette, Spacing Scale, Shadows) e estados de componentes (Hover, Focus, Disabled, Active) exatamente como mapeados. É proibido resumir, omitir propriedades. 

## Sem Intervenção Criativa

Não adicione componentes extras, não sugira melhorias e não agrupe definições distintas. O output deve ser o código bruto das especificações técnicas exatamente como definido, sem intervenções criativas ou componentes extras não declarados.

## Foco em Artefatos de Conversão

Priorize a precisão técnica dos elementos críticos do site: Headers responsivos, Grids de formulários, Hierarquia de botões (Primary/Secondary/Ghost) e Cards de conteúdo, mantendo a consistência com as Rules (Regras) extraídas.