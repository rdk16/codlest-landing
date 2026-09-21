# codlest-landing

Landing page do codlest, a rede social para devs do Brasil. SvelteKit 2 + Svelte 5 + Tailwind CSS 4, gerada como site estático (`adapter-static`) e publicada no GitHub Pages por GitHub Actions. Roda com Deno.

## Rodando localmente

```sh
deno install
deno task dev
```

Outros comandos: `deno task check` (tipos), `deno task build`, `deno task preview`, `deno task format`.

Depois do primeiro `deno install`, commite o `deno.lock`.

## Conteúdo

Todo o texto está em `src/lib/content.ts`. Os componentes ficam em `src/lib/components/` e as cores e fontes em `src/app.css` (bloco `@theme`).

Em `content.ts`, troque:

- `site.app` pela URL do app quando ele estiver no ar (os botões "Criar minha conta" apontam para ela);
- `site.repositorio` pelo endereço real do repositório.

## Conectar ao GitHub

Com o [GitHub CLI](https://cli.github.com/):

```sh
git init -b main
git add .
git commit -m "feat: landing page inicial"
gh repo create codlest-landing --public --source=. --remote=origin --push
```

Sem o CLI, crie o repositório vazio no GitHub e rode:

```sh
git remote add origin git@github.com:SEU-USUARIO/codlest-landing.git
git push -u origin main
```

Depois, no repositório: **Settings → Pages → Build and deployment → Source: GitHub Actions**.

## CI e deploy

- `.github/workflows/ci.yml`: em pull requests e branches que não são `main`, roda checagem de tipos e build.
- `.github/workflows/deploy.yml`: a cada push na `main`, roda checagem, build e publica no Pages.

O caminho base (`/<nome-do-repo>`) é descoberto pela action `configure-pages` e chega ao build pela variável `BASE_PATH`. Repositório `<usuario>.github.io` ou domínio próprio (arquivo `static/CNAME`) ficam com base vazia automaticamente.

Para testar o build com o mesmo caminho base do Pages:

```sh
BASE_PATH=/codlest-landing deno task build
deno task preview
```
