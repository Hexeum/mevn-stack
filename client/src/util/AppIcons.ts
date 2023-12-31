export type AppIcon = {
  mdi: string,
  unicode: number,
  tag: string
}

export const panelIcons = [
    { mdi: "mdi-facebook", unicode: 0xF020C, tag: "facebook" },
    { mdi: "fa-brands fa-paypal", unicode: 0xF1ED, tag: "paypal-donate" },
    { mdi: "fa-brands fa-discord", unicode: 0xf392, tag: "discord-community" },
    { mdi: "fa-brands fa-tiktok", unicode: 0xe07b, tag: "tiktok" },
    { mdi: "mdi-reddit", unicode: 0xF044D, tag: "reddit" },
    { mdi: "mdi-twitch", unicode: 0xF0543, tag: "twitch" },
    { mdi: "mdi-twitter", unicode: 0xF0544, tag: "twitter" },
    { mdi: "mdi-youtube", unicode: 0xF05C3, tag: "youtube" },
    { mdi: "mdi-snapchat", unicode: 0xF04B6, tag: "snapchat" },
    { mdi: "fa-brands fa-vk", unicode: 0xf189, tag: "vkontakte" },
    { mdi: "fa-brands fa-telegram", unicode: 0xf2c6, tag: "telegram" },
    { mdi: "fa-brands fa-soundcloud", unicode: 0xf1be, tag: "telegram" },
    { mdi: "mdi-link-variant", unicode: 0xF0339, tag: "link" },
    { mdi: "mdi-hand-coin", unicode: 0xF188F, tag: "donate-coin-gift" },
    { mdi: "mdi-gift", unicode: 0xF0E44, tag: "gift-present" },
    { mdi: "mdi-account-group", unicode: 0xF0849, tag: "subscribe-raid-people-community" },
    { mdi: "mdi-diamond", unicode: 0xF0B8A, tag: "diamond-bits-gems-cheer" },
    { mdi: "mdi-web", unicode: 0xF059F, tag: "website" },
    { mdi: "mdi-tshirt-crew", unicode: 0xF0A7B, tag: "merchandise" },
    { mdi: "mdi-bitcoin", unicode: 0xF0813, tag: "crypto-bitcoin" },
    { mdi: "mdi-cash", unicode: 0xF0114, tag: "cash-donate-cashapp-donation-money" },
    { mdi: "fa-brands fa-line", unicode: 0xf3c0, tag: "line" },
    { mdi: "mdi-currency-usd", unicode: 0xF01C1, tag: "currency-usd-donate-donation" },
    { mdi: "mdi-email", unicode: 0xF01EE, tag: "email" },
    { mdi: "mdi-laptop", unicode: 0xF0322, tag: "hardware-specs-pc-setup" },
    { mdi: "mdi-clipboard-text-outline", unicode: 0xF0A38, tag: "rules-schedule" },
    { mdi: "mdi-instagram", unicode: 0xF02FE, tag: "instagram" },
    { mdi: "mdi-patreon", unicode: 0xF0882, tag: "patreon" },
    { mdi: "mdi-text-box-edit-outline", unicode: 0xF1A7D, tag: "rules-schedule" },
    { mdi: "mdi-hand-heart", unicode: 0xF10F1, tag: "follow-heart-support" },
    { mdi: "mdi-heart-circle-outline", unicode: 0xF0972, tag: "follow-heart-support" },
    { mdi: "mdi-exclamation-thick", unicode: 0xF1238, tag: "commands-exclamation" },
    { mdi: "mdi-trophy", unicode: 0xF0538, tag: "trophy-achievements-milestones" },
    { mdi: "mdi-archive", unicode: 0xF003C, tag: "archive-vod" },
    { mdi: "mdi-charity", unicode: 0xF0C4F, tag: "charity-gift-support" },
    { mdi: "mdi-brush", unicode: 0xF00E3, tag: "art-creations-work" },
    { mdi: "mdi-hand-clap", unicode: 0xF194B, tag: "credits-brands-sponsors" },
    { mdi: "mdi-calendar-star", unicode: 0xF09D3, tag: "schedule" },
    { mdi: "mdi-frequently-asked-questions", unicode: 0xF0EB4, tag: "faq-frequently-asked-questions" },
    { mdi: "mdi-palette", unicode: 0xF03D8, tag: "palette-art-portfolio" },
    { mdi: "mdi-controller-classic", unicode: 0xF0B82, tag: "games-controller" },
    { mdi: "mdi-github", unicode: 0xF02A4, tag: "github" },
    { mdi: "mdi-linkedin", unicode: 0xF033B, tag: "linkedin" },
    { mdi: "mdi-bullseye-arrow", unicode: 0xF08C9, tag: "goals-targets" },
    { mdi: "mdi-flag", unicode: 0xF023B, tag: "flag" },
    { mdi: "mdi-music", unicode: 0xF075A, tag: "playlist-music-spotify-songs" },
    { mdi: "mdi-mailbox-open", unicode: 0xF0D88, tag: "pobox-mailbox-mail" },
    { mdi: "mdi-food", unicode: 0xF025A, tag: "food" },
    { mdi: "mdi-server", unicode: 0xF048B, tag: "servers" },
    { mdi: "mdi-store", unicode: 0xF04DC, tag: "store-shop-brand" },
    { mdi: "mdi-spotify", unicode: 0xF04C7, tag: "playlist-music-spotify-songs" },
    { mdi: "mdi-steam", unicode: 0xF04D3, tag: "steam-games" },
    { mdi: "fa-brands fa-behance", unicode: 0xf1b4, tag: "behance-portfolio" },
    { mdi: "mdi-bag-suitcase", unicode: 0xF158B, tag: "travel" },
    { mdi: "mdi-cart-heart", unicode: 0xF18E0, tag: "wishlist-amazon" },
    { mdi: "fa-solid fa-language", unicode: 0xf1ab, tag: "languages" },
    { mdi: "fa-solid fa-paw", unicode: 0xf1ab, tag: "pets-cat-dog" },
  ];

export function GetDefaultIcon(){
  return panelIcons[0];
}