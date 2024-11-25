# DOMContentLoader Bootstrap<br>(Live Reload)

<br><br><br>

### Quick Navigation
- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Performance](#performance)
- [Contact](#contact)

<br><br>

### Installation

<details>
<summary>Tampermonkey</summary>

- [Chrome Extension](https://chromewebstore.google.com/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo)
- [Firefox Add-on](https://addons.mozilla.org/en-US/firefox/addon/tampermonkey/)
- [Opera Add-on](https://addons.opera.com/en/extensions/details/tampermonkey-beta/)
</details>

<details>
<summary>Greasemonkey</summary>

- [Firefox](https://www.greasespot.net/)

</details>

<details>
<summary>Violentmonkey</summary>

- [Chrome Extension](https://chromewebstore.google.com/detail/violentmonkey/jinjaccalgkegednnccohejagnlnfdag)
- [Firefox Add-on](https://addons.mozilla.org/en-US/firefox/addon/violentmonkey/)

</details>

<details>
<summary>Scriptish</summary>

- [Firefox](https://github.com/scriptish/scriptish)

</details>

<br><br>

### Usage

```js
// @require      https://raw.githubusercontent.com/its-Jaxx/DOMContentLoaderBootstrap/refs/heads/main/DOMContentLoader-Bootstrap.js
```
- Once the script is added through ```// @require```, it will automatically run and provide a live update for your main script without the need for additional code.

<br><br>

### Features

- **Auto Run**: Automatically runs your main script once page is loaded.
- **MutationObserver**: Listens for updates and provides your script with live information.
- **Failsafe**: `DOMContentLoader` contains well thought out failsafes that handles any error and prevents breaking.

<br><br>

### Performance

- Any form of providing live information will come at a performance impact, though normally minimal.
- Static websites has close to no performance impact.

<br><br>

### Contact

- [GitHub Issues](https://github.com/its-Jaxx/Message-Spammer/issues)
- [Discord](https://discord.com/users/922843169480122388/)
