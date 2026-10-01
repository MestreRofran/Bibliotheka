# Bibliotheka 1.5

PWA da Bibliotheka — biblioteca e leitor pessoal para PDF, EPUB e TXT.

## Arquivos
- `index.html` — aplicativo.
- `manifest.json` — manifesto PWA.
- `service-worker.js` — cache/offline e atualização da PWA.
- `icon.png` — ícone único do aplicativo, na raiz do projeto.

## Publicação
Envie os quatro arquivos para a raiz do repositório/site e publique em HTTPS (por exemplo, GitHub Pages). Abra `index.html` pelo site e use **Ajustes do APP > Dados > Instalar PWA** quando o navegador liberar a instalação.

A primeira utilização de alguns motores externos (PDF.js, JSZip e componentes da voz neural) pode precisar de internet; recursos já armazenados/cacheados permanecem disponíveis conforme o navegador.
