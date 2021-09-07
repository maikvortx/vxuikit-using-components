# VxUiKit Using Component

Este projeto demonstra como você pode importar os incríveis compontens do nosso design system e utilizar em seus projetos.

## Instalação

```
npm i @vortx-dtvm/ui-kit-components
```

## Importando os componente do UiKit

Para usar o uikit e aproveitar os componentes do nosso design system realize a instalação do pacote abaixo:

```
npm i @vortx-dtvm/ui-kit-components
```

Após a instalação do pacote importe os componetnes que deseja usar em seu projeto:

```
import { Button, Input, DatePicker } from '@vortx-dtvm/ui-kit-components'

<!-- Button -->
<Button color="primary" size="sm">Small</Button>

<!-- Input -->
<Input
    id="regular"
    labelText="Regular"
    inputProps={{
        placeholder: "Regular"
    }}
    formControlProps={{
        fullWidth: true
    }}
/>

<!-- DatePicker -->
<DatePicker
    id="regular"
    labelText="Regular"
    variant="outlined"
    inputProps={{
        placeholder: "Regular"
    }}
    formControlProps={{
        fullWidth: true
    }}
/>

```

## Como publicar uma nova versão do pacote de componentes?

Para publicar uma nova versão do pacote dos compoentes, altere a campo `version` no package.js aumentando uma versão conforme suas alterações. Importante seguir o padrão de semantic release para a publicação das versões do projeto. Após a alteração da versão execute os comandos abaixo:

```
npm run compile
npm publish
```
