// ==========================================================
//  GAME DATA — edit this file only. Both index.html and game.html read it.
//
//  For each game:
//   id           unique, no spaces (used in the URL: game.html?id=slot-1)
//   cat          "slot" or "table"
//   title, type  game name and a short label (e.g. "Video Slot")
//   tagline      short teaser shown on the home-page card and under the title
//   icon         square game icon (.svg or .webp). Used on the card and the game page.
//   thumb        fallback card image if there is no icon (.webp)
//   shots        desktop screenshots (.webp)
//   mobileShots  mobile screenshots, portrait or landscape (.webp)
//   videos       list of .mp4 paths in videos/<game-id>/. [] if none yet.
//   poster       image shown before a video plays (.webp)
//   embed        optional YouTube/Vimeo *embed* URL. Used instead of "videos" if set.
//   overview     "Game Overview" text. Blank line = new paragraph; a line starting
//                with "## " is a sub-heading.
//   details      label/value rows in the Game details box
//   highlights   short tags shown under the details
//
//  Images are .webp. Files live in images/<game-id>/ named *_D1.webp (desktop),
//  *_M1.webp (mobile) and icon.svg / icon.webp; videos are in videos/<game-id>/.
// ==========================================================
window.GAMES = [
 {
  id:"slot-1",
  cat:"slot",
  title:"9 Gifts of Santa",
  type:"Video Slot",
  tagline:"Santa is racing through a magical Christmas night, with Mrs. Claus and the elves helping to fill his sleigh with gifts! Join the adventure as festive surprises land on the reels…",
  icon:"images/slot-1/icon.svg",
  thumb:"images/slot-1/9GS_D1.webp",
  poster:"images/slot-1/9GS_M4.webp",
  shots:["images/slot-1/9GS_D1.webp","images/slot-1/9GS_D2.webp","images/slot-1/9GS_D3.webp","images/slot-1/9GS_D4.webp","images/slot-1/9GS_D5.webp"],
  mobileShots:["images/slot-1/9GS_M_FS1.webp","images/slot-1/9GS_M_FS2.webp","images/slot-1/9GS_M_FS3.webp","images/slot-1/9GS_M1.webp","images/slot-1/9GS_M2.webp","images/slot-1/9GS_M3.webp","images/slot-1/9GS_M4.webp"],
  videos:["videos/slot-1/Video.mp4"],
  embed:"",
  overview:"Santa is racing through a magical Christmas night, with Mrs. Claus and the elves helping to fill his sleigh with gifts! Join the adventure as festive surprises land on the reels, with Gift Scatters awarding prizes worth up to 5000X your bet. Unlock the Free Spins for even more holiday magic — or use Bonus Buy to jump straight into the festive action!\n\n## Why wait for the bonus?\nBonus Buy gives players the power to purchase instant access to the game’s headline feature. Simply choose your bet, buy the bonus and go straight into the action.\nNo waiting for the right symbols to land. No spins required. Just instant access to the feature.",
  details:[["Type","Video slots"],["Paylines","25"],["Reels","5x3"]],
  highlights:["Buy bonus","Free spin","Big win","Multiple RTPs"]
 },
 {
  id:"slot-2",
  cat:"slot",
  title:"Halloween Smash",
  type:"Video Slot",
  tagline:"Unleash the Spooky Scatter Action! It’s STACKED-SCATTER SPOOKINESS! Enter a thrilling world of eerie excitement with Halloween Smash, where every spin can bring explosive Scatter action and hauntingly big possibilities.…",
  icon:"images/slot-2/icon.svg",
  thumb:"images/slot-2/HS_D1.webp",
  poster:"images/slot-2/HS_D1.webp",
  shots:["images/slot-2/HS_D1.webp","images/slot-2/HS_D2.webp","images/slot-2/HS_D3.webp","images/slot-2/HS_D4.webp"],
  mobileShots:["images/slot-2/HS_M1.webp","images/slot-2/HS_M2.webp","images/slot-2/HS_M3.webp","images/slot-2/HS_M4.webp","images/slot-2/HS_M5.webp","images/slot-2/HS_M6.webp","images/slot-2/HS_M7.webp"],
  videos:["videos/slot-2/Halloween.mp4","videos/slot-2/Halloween2.mp4"],
  embed:"",
  overview:"Unleash the Spooky Scatter Action!\nIt’s STACKED-SCATTER SPOOKINESS! Enter a thrilling world of eerie excitement with Halloween Smash, where every spin can bring explosive Scatter action and hauntingly big possibilities.\n\nHit up to NINE Scatter symbols and chase giant payouts of up to 5,000× your bet. Then enter the Free Spins game, where even MORE Wilds and ScatterBlast symbols join the fright-filled fun.\n\nAnd when the Free Spins begin, Wilds pay 2× for an extra boost of spooky excitement!\n\nGet ready for a frightfully fun spin — Halloween Smash is waiting!\n\n## Why wait for the bonus?\nBonus Buy gives players the power to purchase instant access to the game’s headline feature. Simply choose your bet, buy the bonus and go straight into the action.\nNo waiting for the right symbols to land. No spins required. Just instant access to the feature.",
  details:[["Type","Video slots"],["Paylines","25"],["Reels","5x3"]],
  highlights:["Buy bonus","Free spin","Big win","Multiple RTPs"]
 },
 {
  id:"slot-3",
  cat:"slot",
  title:"Marine Wars",
  type:"Video Slot",
  tagline:"Shark Army vs. Dolphin Corps — It’s GO TIME! General Shark and Commander Dolphin have had enough! There’s only room for one side in this underwater showdown, and the battle…",
  icon:"images/slot-3/icon.webp",
  thumb:"images/slot-3/MW_D1.webp",
  poster:"images/slot-3/MW_D1.webp",
  shots:["images/slot-3/MW_D1.webp","images/slot-3/MW_D2.webp","images/slot-3/MW_D3.webp","images/slot-3/MW_D4.webp"],
  mobileShots:["images/slot-3/MW_M1.webp","images/slot-3/MW_M2.webp","images/slot-3/MW_M3.webp","images/slot-3/MW_M4.webp","images/slot-3/MW_M5.webp"],
  videos:["videos/slot-3/MW.mp4"],
  embed:"",
  overview:"Shark Army vs. Dolphin Corps — It’s GO TIME!\nGeneral Shark and Commander Dolphin have had enough! There’s only room for one side in this underwater showdown, and the battle is about to begin!\n\nDive into an epic oceanic slot adventure featuring crazy characters, Super Stacked symbols, and up to 30 Free Spins with even MORE Wilds! With 5×4 reels and 50 paylines, every spin puts you right in the middle of the action.\n\nAnd when the Recon Specialists spot potential big wins in advance, you’ll want to keep your eyes on the reels!\n\nChoose your side, brace for battle, and get ready for the ultimate clash between the dreaded Shark Army and the resilient Dolphin Corps. LET’S GO!",
  details:[["Type","Video slots"],["Paylines","50"],["Reels","5x4"]],
  highlights:["Free spin","Big win","Multiple RTPs"]
 },
 {
  id:"slot-4",
  cat:"slot",
  title:"Steam Miners",
  type:"Video Slot",
  tagline:"Strike It Rich Underground! Who’s in charge of this massive underground haul of riches? You are! Take command of a fearless crew of Steam Miners and journey deep beneath the…",
  icon:"images/slot-4/icon.svg",
  thumb:"images/slot-4/SM_D1.webp",
  poster:"images/slot-4/SM_D1.webp",
  shots:["images/slot-4/SM_D1.webp","images/slot-4/SM_D2.webp","images/slot-4/SM_D3.webp","images/slot-4/SM_D4.webp","images/slot-4/SM_D5.webp"],
  mobileShots:["images/slot-4/SM_M1.webp","images/slot-4/SM_M2.webp","images/slot-4/SM_M3.webp","images/slot-4/SM_M4.webp","images/slot-4/SM_M5.webp","images/slot-4/SM_M6.webp","images/slot-4/SM_M7.webp","images/slot-4/SM_M8.webp","images/slot-4/SM_M9.webp"],
  videos:["videos/slot-4/SM.mp4"],
  embed:"",
  overview:"Strike It Rich Underground!\nWho’s in charge of this massive underground haul of riches? You are! Take command of a fearless crew of Steam Miners and journey deep beneath the surface in search of thrilling slot action.\n\nStrike gold with the high-paying Bonus round, then keep the excitement flowing with Free Spins featuring added Scatters and exciting retriggers.\n\nLead the crew, uncover the riches, and dig into an unforgettable adventure with Steam Miners!",
  details:[["Type","Video slots"],["Paylines","20"],["Reels","5x3"]],
  highlights:["Free spin","Free credits bonus","Big win","Multiple RTPs"]
 },
 {
  id:"slot-5",
  cat:"slot",
  title:"USA Wild",
  type:"Video Slot",
  tagline:"Unleash Your Wild Side! Experience the wild side of America with USA Wild! Celebrate iconic American scenery and thrilling slot action as you chase exciting bonus features and big winning…",
  icon:"images/slot-5/icon.svg",
  thumb:"images/slot-5/USAW_D1.webp",
  poster:"images/slot-5/USAW_D1.webp",
  shots:["images/slot-5/USAW_D1.webp","images/slot-5/USAW_D2.webp","images/slot-5/USAW_D3.webp","images/slot-5/USAW_D4.webp","images/slot-5/USAW_D5.webp"],
  mobileShots:["images/slot-5/USAW_M1.webp","images/slot-5/USAW_M2.webp","images/slot-5/USAW_M3.webp","images/slot-5/USAW_M4.webp"],
  videos:["videos/slot-5/USAW.mp4"],
  embed:"",
  overview:"Unleash Your Wild Side!\nExperience the wild side of America with USA Wild! Celebrate iconic American scenery and thrilling slot action as you chase exciting bonus features and big winning potential.\n\nLand three or more iconic Bald Eagle symbols to unlock one of five exciting Bonus Games, including the spectacular Super Wheel, with a maximum payout of over 7,700× your bet!\n\nYou could also enter the Free Spins Bonus, featuring 12 Free Spins with a 3× multiplier and extra Wild symbols. Plus, explore three additional Bonus Games, each set against its own breathtaking American vista.\n\nSpread your wings, embrace the adventure, and get wild with USA Wild today!",
  details:[["Type","Video slots"],["Paylines","25"],["Reels","5x3"]],
  highlights:["5 different bonus games","Big win","Multiple RTPs"]
 },
 {
  id:"table-1",
  cat:"table",
  title:"Blackjack",
  type:"Table Game",
  tagline:"Play the most popular Las Vegas table game of all time, where it’s you versus the dealer in up to three hands of action. Splits, double-downs, play this amazing mobile-certified…",
  icon:"images/table-1/icon.svg",
  thumb:"images/table-1/BJ_D1.webp",
  poster:"images/table-1/BJ_D1.webp",
  shots:["images/table-1/BJ_D1.webp","images/table-1/BJ_D2.webp","images/table-1/BJ_D3.webp","images/table-1/BJ_D4.webp","images/table-1/BJ_D5.webp"],
  mobileShots:["images/table-1/BJ_M1.webp","images/table-1/BJ_M2.webp","images/table-1/BJ_M3.webp","images/table-1/BJ_M4.webp"],
  videos:["videos/table-1/BJ.mp4"],
  embed:"",
  overview:"Play the most popular Las Vegas table game of all time, where it’s you versus the dealer in up to three hands of action. Splits, double-downs, play this amazing mobile-certified version of “21” today!",
  details:[["Type","Table game"]],
  highlights:[]
 },
 {
  id:"table-2",
  cat:"table",
  title:"Baccarat",
  type:"Table Game",
  tagline:"Our newest version of this traditional card game comes packed with features like a complete auto-scoring display with 5 major scoring systems included and extra scoring icons to make game…",
  icon:"images/table-2/icon.svg",
  thumb:"images/table-2/Bacc_D1.webp",
  poster:"images/table-2/Bacc_D1.webp",
  shots:["images/table-2/Bacc_D1.webp","images/table-2/Bacc_D2.webp","images/table-2/Bacc_D3.webp","images/table-2/Bacc_D4.webp","images/table-2/Bacc_D5.webp","images/table-2/Bacc_D6.webp","images/table-2/Bacc_D7.webp"],
  mobileShots:["images/table-2/Bacc_M1.webp","images/table-2/Bacc_M2.webp","images/table-2/Bacc_M3.webp","images/table-2/Bacc_M4.webp","images/table-2/Bacc_M5.webp"],
  videos:["videos/table-2/Bcc.mp4"],
  embed:"",
  overview:"Our newest version of this traditional card game comes packed with features like a complete auto-scoring display with 5 major scoring systems included and extra scoring icons to make game decisions easier than ever! Play up to 3 Free hands per shoe, and each shoe is played through, without re-shuffling each hand. Player and Banker pair bets have been added. Traditional animated shuffling and burn card sequences bring the feel of Casino Baccarat to your PC, tablet or smartphone for play-on-the-go. Automated card-peeking and real recorded dealer voiceovers add to the “real-feel” of the game, so play Baccarat or richly-trimmed higher-limit VIP Baccarat… it’s only Natural!",
  details:[["Type","Table game"]],
  highlights:[]
 },
 {
  id:"table-3",
  cat:"table",
  title:"VIP American Roulette",
  type:"Table Game",
  tagline:"Our new mobile version of the traditional game is the fastest and easiest to play on your mobile tablet or smartphone! Full statistical pages give you all the info you…",
  icon:"images/table-3/icon.svg",
  thumb:"images/table-3/Roul_D1.webp",
  poster:"images/table-3/Roul_D1.webp",
  shots:["images/table-3/Roul_D1.webp","images/table-3/Roul_D2.webp","images/table-3/Roul_D3.webp","images/table-3/Roul_D4.webp","images/table-3/Roul_D5.webp"],
  mobileShots:["images/table-3/Roul_M1.webp","images/table-3/Roul_M2.webp","images/table-3/Roul_M3.webp","images/table-3/Roul_M4.webp","images/table-3/Roul_M5.webp"],
  videos:["videos/table-3/Roul.mp4"],
  embed:"",
  overview:"Our new mobile version of the traditional game is the fastest and easiest to play on your mobile tablet or smartphone! Full statistical pages give you all the info you need to make winning wagers, including hot/cold numbers, bar graphs and even pie-charts to help you analyze game results. Play the traditional style game with outside and inside bets, or go to our touchscreen neighbors track to bet sections of the wheel quickly and accurately. Soothing female voiceover calls out the results of course… Take our new Roulette for a spin today!",
  details:[["Type","Table game"]],
  highlights:[]
 }
];
