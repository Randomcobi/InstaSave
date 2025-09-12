# InstaSave

![icon](icons/icon128.png)

## How It Works

Using a combination of regex and some `ReactFiber` magic, this extension
detects the post you want and fetches Instagram's API to download the
photos or videos for you.

## Browser Compatibility

The extension works on any Chromium-based browser that supports the
`fetch()` API. Tested on:

-   Google Chrome\
-   Microsoft Edge\
-   Firefox

## Installation

1.  Download the [latest
    release](https://github.com/Randomcobi/InstaSave/releases/tag/1.0)
    and extract it to a folder.\
2.  Enable **Developer Mode** in your browser's extensions settings.\
3.  Drag and drop the extracted folder into `chrome://extensions/`.

## Usage

-   Open any post, reel, or story and click the **Download** button.\
-   Click on individual photos or videos to save them directly.\
-   To download multiple items, toggle multi-select by clicking
    **Photos**, select the items you want (or hold down **Photos** to
    select all), then click **Download** to save them as a ZIP file.\
-   On the home page, the extension auto-detects the visible post --- no
    need to open the comment section, thanks to `ReactFiber`.

## Features

-   Download posts ✔\
-   Download reels ✔\
-   Download recent stories ✔\
-   Download highlight stories ✔\
-   High-resolution support ✔\
-   ZIP download support ✔

## Customization

You're free to customize the extension as you like --- just avoid
modifying constants that begin with `IG_`, as these are critical for
functionality.

Example: adjust hide/show transition effects with CSS

``` css
.display-container.hide {
    transform-origin: 85% bottom;
    transform: scale(0);
    pointer-events: none;
    opacity: 0.6;
}
```

## Keyboard Shortcuts

> Note: Some shortcuts may not work if your system or external
> applications override them.\
> They also won't work while typing in fields like `input`, `textarea`,
> or elements with a `textbox` role.

-   **Download:** `D`\
-   **Close:** `Esc`, `C`, or `c`\
-   **Select all:** `S` or `s`

## Deprecated Features

The following features have been removed:

-   **V5.1.0:** Fallback download of the latest post from a user.

## Notes

-   If the extension is stored on an external drive/partition that isn't
    auto-mounted on Linux, it may disappear. Simply remount the drive
    and restart your browser.

## Demo

[Watch Demo
(v5.1.0)](https://github.com/HOAIAN2/Instagram-Downloader/assets/98139595/917369c9-cdbb-4315-8e6d-7a1632a8888b)
