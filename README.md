```html
style = `<style>

button[aria-label="Open GIF picker"],               /* Remove GIF picker */
button[aria-label="Open sticker picker"],           /* Remove sticker picker */
button[aria-label="Send a gift"],                   /* Remove gift button */
div[role=tabbar]>:nth-child(n+7):nth-child(-n+12),  /* Remove nitro section in options */
.customizationSection-2ns2M6:nth-child(2)           /* Remove banner option in profile customization */
{display:none !important;}

</style>`

document.head.innerHTML += style
```
