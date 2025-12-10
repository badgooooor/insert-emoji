# Obsidian Template Plugin

Obsidian plugin for inserting emojis in the editor.

## ⏳ TODOs

- [x] Very minimal version for plugin
- [ ] Add fuzzy-search on emoji in the modal
- [ ] Group emojis in the modal
- [ ] Add recently used emojis to modal
- [ ] Add other methods to insert emoji (open for suggestions)

### Install manually

1. Navigate to the [Release page of Insert Emoji](https://github.com/badgooooor/insert-emoji/releases)
2. Find the [latest version of the plugin](https://github.com/badgooooor/insert-emoji/releases/latest).
3. Download the `main.js` file and `manifest.json` file.
4. Open up the `.obsidian/plugins` directory of your Obsidian vault.
5. If no `.obsidian/plugins` directory exists, create one.
6. Create a new directory named `insert-emoji` inside the `.obsidian/plugins` directory.
7. Move `main.js` file and `manifest.json` file into the `insert-emoji` directory.

The directory structure should look like this after these steps:

```shell
❯ tree
.
├── main.js
├── manifest.json
```

8. Enable the "Inser Emoji" plugin from the "Installed plugins" list.

## 💻 How to develop

1. As [Build a plugin - Developer Documentation](https://docs.obsidian.md/Plugins/Getting+started/Build+a+plugin) has suggested, create a separate vault for development.
2. (Optional) Install the hot-reload plugin: [pjeby/hot-reload](https://github.com/pjeby/hot-reload).
3. Create a `.obsidian/plugins` directory in the vault root.
4. Clone this repository into the `.obsidian/plugins` directory.
5. Install dependencies

```shell
pnpm install
```

If you use [`@antfu/ni`](https://github.com/antfu/ni), you can also use the following command:

```shell
ni
```

6. Build the plugin for development

```shell
pnpm run build
```

If you use [`@antfu/ni`](https://github.com/antfu/ni), you can also use the following command:

```shell
nr build
```

7. Reload Obsidian to see the changes. (If you use the hot-reload plugin, you don't need to reload Obsidian manually.)

> Reloading can be called from the command palette with `Reload app without saving` command.

## 🔨 How to build

```shell
pnpm run build
```

If you use [`@antfu/ni`](https://github.com/antfu/ni), you can also use the following command:

```shell
nr build
```

### Written with ♥
