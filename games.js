// ==========================================================
//  GAME DATA — edit this file only. Both index.html and game.html read it.
//
//  For each game:
//   id        unique, no spaces (used in the URL: game.html?id=slot-1)
//   cat       "slot" or "table"
//   thumb     card image on the home page
//   shots     screenshots shown on the game page (add as many as you like)
//   video     path to an .mp4 (put it in /videos). Leave "" if none yet.
//   poster    optional image shown before the video plays
//   embed     optional YouTube/Vimeo *embed* URL. Used instead of "video" if set.
//   facts     small label/value table (delete or add rows freely)
//   features  bullet list of what makes the game interesting technically
//   role      what YOU did on this game
//
//  Everything below is placeholder text — replace it with the real game
//  names and details.
// ==========================================================
window.GAMES = [
 {
  id:"slot-1", cat:"slot", title:"Slot Game 1", type:"Video Slot",
  tagline:"Spine-animated slot built on the shared PixiJS v8 baseclass.",
  thumb:"images/slot-1/1.jpg",
  shots:["images/slot-1/1.jpg","images/slot-1/2.jpg","images/slot-1/3.jpg"],
  video:"videos/slot-1.mp4", poster:"images/slot-1/1.jpg", embed:"",
  description:"A browser-based video slot running on the in-house TypeScript slot baseclass. The game is a lightweight subclass: it supplies its own symbols, paytable, art and feature sequences while reels, spin flow, server communication and responsive scaling come from the shared platform.",
  role:"Developed the game as a subclass of the slot baseclass, integrated Spine animations and GSAP-driven win and feature sequences, and handled server integration and deployment.",
  facts:[["Type","Video slot"],["Engine","PixiJS v8"],["Language","TypeScript"],["Animation","Spine, GSAP"],["Platform","Desktop & mobile browsers"],["Status","Live"]],
  features:["Skeletal Spine animation for symbols and feature intros","GSAP timelines for win presentation and bonus transitions","Responsive layout for portrait and landscape","Server-driven outcomes through the shared communication layer"],
  tech:["PixiJS v8","TypeScript","Spine","GSAP","UnoCSS"]
 },
 {
  id:"slot-2", cat:"slot", title:"Slot Game 2", type:"Video Slot",
  tagline:"Animation-heavy slot with GSAP-driven feature sequences.",
  thumb:"images/slot-2/1.jpg",
  shots:["images/slot-2/1.jpg","images/slot-2/2.jpg","images/slot-2/3.jpg"],
  video:"videos/slot-2.mp4", poster:"images/slot-2/1.jpg", embed:"",
  description:"A feature-rich slot where timing and presentation matter: win celebrations, free-spin intros and transitions are all authored as GSAP timelines so they can be tuned without touching game logic.",
  role:"Built the game and its feature flow on the shared baseclass; tuned animation timing and performance on mid-range mobile devices.",
  facts:[["Type","Video slot"],["Engine","PixiJS v8"],["Language","TypeScript"],["Animation","GSAP"],["Platform","Desktop & mobile browsers"],["Status","Live"]],
  features:["Timeline-based win and feature animations","Asset loading and cache-busting handled by the deploy pipeline","Shared UI components styled with UnoCSS"],
  tech:["PixiJS v8","TypeScript","GSAP","UnoCSS"]
 },
 {
  id:"slot-3", cat:"slot", title:"Slot Game 3", type:"Video Slot",
  tagline:"Built from a reusable template slot.",
  thumb:"images/slot-3/1.jpg",
  shots:["images/slot-3/1.jpg","images/slot-3/2.jpg","images/slot-3/3.jpg"],
  video:"videos/slot-3.mp4", poster:"images/slot-3/1.jpg", embed:"",
  description:"Created from one of the template slots I built for the team, showing how a new title can go from art hand-off to a playable build quickly by reusing the shared reel, spin and UI systems.",
  role:"Authored the template this game is based on and supported the team through integration and release.",
  facts:[["Type","Video slot"],["Engine","PixiJS v8"],["Language","TypeScript"],["Platform","Desktop & mobile browsers"],["Status","Live"]],
  features:["Template-based setup for fast turnaround","Configurable paytable, symbols and reel layout","Automated canvas tests with Playwright"],
  tech:["PixiJS v8","TypeScript","Playwright"]
 },
 {
  id:"slot-4", cat:"slot", title:"Slot Game 4", type:"Video Slot",
  tagline:"Production slot running on the PixiJS v8 platform.",
  thumb:"images/slot-4/1.jpg",
  shots:["images/slot-4/1.jpg","images/slot-4/2.jpg","images/slot-4/3.jpg"],
  video:"videos/slot-4.mp4", poster:"images/slot-4/1.jpg", embed:"",
  description:"Another title on the shared slot platform. Add a short paragraph here about the theme, the main mechanic and anything you are proud of.",
  role:"Led development and release; resolved rendering and reel issues during QA.",
  facts:[["Type","Video slot"],["Engine","PixiJS v8"],["Language","TypeScript"],["Platform","Desktop & mobile browsers"],["Status","Live"]],
  features:["Describe a key feature here","Describe a technical challenge you solved"],
  tech:["PixiJS v8","TypeScript"]
 },
 {
  id:"table-1", cat:"table", title:"Table Game 1", type:"RNG Table Game",
  tagline:"RNG table game on the shared table-game baseclass.",
  thumb:"images/table-1/1.jpg",
  shots:["images/table-1/1.jpg","images/table-1/2.jpg","images/table-1/3.jpg"],
  video:"videos/table-1.mp4", poster:"images/table-1/1.jpg", embed:"",
  description:"A random-number-generated table game with a data-driven UI. Betting, round flow and results are driven by the server through the PHP gateway, with the client focused on clear presentation and responsiveness.",
  role:"Built the client on the table-game baseclass and the communication layer to the game endpoint.",
  facts:[["Type","RNG table game"],["Engine","PixiJS / Phaser"],["Language","TypeScript"],["Backend","PHP gateway / RGS"],["Platform","Desktop & mobile browsers"],["Status","Live"]],
  features:["Data-driven UI styled with UnoCSS","Server-authoritative round results","Chip, bet and history handling shared across titles"],
  tech:["TypeScript","PixiJS","UnoCSS","PHP gateway"]
 },
 {
  id:"table-2", cat:"table", title:"Table Game 2", type:"Live Table Game",
  tagline:"Live table game client connected to a live dealer stream.",
  thumb:"images/table-2/1.jpg",
  shots:["images/table-2/1.jpg","images/table-2/2.jpg","images/table-2/3.jpg"],
  video:"videos/table-2.mp4", poster:"images/table-2/1.jpg", embed:"",
  description:"The betting and results interface for a live table game. The client stays in sync with the live round, handling bet windows, countdowns and result display on top of the stream.",
  role:"Developed the betting UI and real-time state handling; worked with QA on edge cases around round timing.",
  facts:[["Type","Live table game"],["Language","TypeScript"],["Backend","RGS integration"],["Platform","Desktop & mobile browsers"],["Status","Live"]],
  features:["Real-time round and bet-window synchronisation","Responsive layout over live video","Reconnect and error-state handling"],
  tech:["TypeScript","Phaser","UnoCSS"]
 },
 {
  id:"table-3", cat:"table", title:"Table Game 3", type:"RNG Table Game",
  tagline:"Lightweight RNG table game built as a baseclass subclass.",
  thumb:"images/table-3/1.jpg",
  shots:["images/table-3/1.jpg","images/table-3/2.jpg","images/table-3/3.jpg"],
  video:"videos/table-3.mp4", poster:"images/table-3/1.jpg", embed:"",
  description:"Another RNG table title that shows how little game-specific code is needed on top of the shared platform. Add the real game name and rules summary here.",
  role:"Built and released the title, reusing shared UI and communication modules.",
  facts:[["Type","RNG table game"],["Language","TypeScript"],["Platform","Desktop & mobile browsers"],["Status","Live"]],
  features:["Reuses shared betting and history components","Fast load times through cache-busted builds"],
  tech:["TypeScript","PixiJS","UnoCSS"]
 }
];
