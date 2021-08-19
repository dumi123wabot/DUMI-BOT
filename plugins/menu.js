const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('wallpaper');

Asena.addCommand({pattern: 'dumi', fromMe: false, desc: Lang.WP}, (async (message, match) => {

    var r_text = new Array ();
    
    
    r_text[0] = "https://i.ibb.co/7G8DcmD/IMG-20210818-162806.jpg";
    r_text[1] = "https://i.ibb.co/7G8DcmD/IMG-20210818-162806.jpg";
    r_text[2] = "https://i.ibb.co/7G8DcmD/IMG-20210818-162806.jpg";
    r_text[3] = "https://i.ibb.co/7G8DcmD/IMG-20210818-162806.jpg";
    r_text[4] = "https://i.ibb.co/7G8DcmD/IMG-20210818-162806.jpg";
    r_text[5] = "https://i.ibb.co/7G8DcmD/IMG-20210818-162806.jpg";
    
        
     var i = Math.floor(6*Math.random())

    var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: `⛦━━━━━💮DUMI BOT🔱💮━━━━━⛦
●▬▬ 🔱📌DUMI 𝐏𝐔𝐁𝐋𝐈𝐂 𝐁𝐎𝐓📌🔱 ▬▬●

♕ *𝙈𝙚𝙙𝙞𝙖 𝘾𝙤𝙢𝙢𝙖𝙣𝙙𝙨* ♕

💫😈DUMI BOT PUBLC😈💫
  ■□■□■□■□■□■□■□■□■□■□

🔱 Command: .vtalk

🔱 Command: .fulleva  
⌨️ Example: .fulleva on / off

🔱 Command: .xmedia
🔰 Description: එය මාධ්‍ය මෙවලම් 25 කට වඩා ඇති ප්ලගිනයකි . 

🔱 Command: .install 
🔰 Description: බාහිර ප්ලගීන සවි කරන්න. 

🔱 Command: .plugin
🔰 Description: ඔබ ස්ථාපනය කර ඇති ප්ලගීන පෙන්වයි. 

🔱 Command: .remove
🔰 Description: Removes the plugin. 

🔱 Command: .ban 
🔰 Description: කණ්ඩායමේ කෙනෙක්ව තහනම් කරන්න.  පණිවිඩයට පිළිතුරු දෙන්න හෝ විධානය භාවිතා කිරීමට පුද්ගලයෙකු ටැග් කරන්න . 

🔱 Command: .add
🔰 Description: මට පරිශීලකයෙක් දෙන්න . 

🔱 Command: .promote 
🔰 Description: ඕනෑම පුද්ගලයෙකු පරිපාලකයෙකු කරයි . 

🔱 Command: .demote 
🔰 Description: ඕනෑම පරිපාලකයෙකුගේ අධිකාරිය ගනී . 

🔱 Command: .mute 
🔰 Description: කණ්ඩායම් කතාබහ නිශ්ශබ්ද කරන්න.  පණිවිඩයක් යැවිය හැක්කේ පරිපාලකයින්ට පමණි . 

🔱 Command: .unmute 
🔰 Description: මෙම කණ්ඩායම් පිළිසඳර ආරම්භ කර ඇත. ඕනෑම කෙනෙකුට යැවිය හැක . 

🔱 Command: .invite 
🔰 Description: කණ්ඩායමේ ආරාධනා සම්බන්ධක සපයයි . 

🔱 Command: .afk 
🔰 Description: එය ඔබව AFK- යතුරු පුවරුවෙන් ඉවත් කරයි . 

🔱 Command: .apkmod

🔱 Command: .fatp

🔱 Command: .jetau

🔱 Command: .carbon

🔱 Command: .gm

🔱 Command: .gn

🔱 Command: .mp4audio
🔰 Description: වීඩියෝව ශබ්දය බවට පරිවර්තනය කරයි . 

🔱 Command: .imagesticker
🔰 Description: ස්ටිකරය ඡායාරූපයක් බවට පත් කරයි.  

🔱 Command: .vsticker

🔱 Command: .deepai
🔰 Description: කෘතිම ස්නායුක ජාල උපයෝගී කරගනිමින් බලවත්ම කෘතිම බුද්ධි මෙවලම් ක්‍රියාත්මක කරයි . 

🔱 Command: .dropwater 

🔱 Command: .print 

🔱 Command: .quote

🔱 Command: .bashmedia 
⌨️ Example: video.mp4 && media/gif/pic.mp4

🔱 Command: .addserver

🔱 Command: .term 
🔰 Description: සේවාදායකයේ කවචය මත විධානය ක්‍රියාත්මක කිරීමට ඉඩ සලසයි . 

🔱 Command: .mediainfo

🔱 Command: .pmsend 

🔱 Command: .pmttssend 

🔱 Command: .ffmpeg 
🔰 Description: අපේක්ෂිත ffmpeg පෙරහන වීඩියෝ පටයට යොදන්න .
⌨️ උදාහරණයක් : .ffmpeg fade=in:0:30 

🔱 Command: .filter 
🔰 Description: එය පෙරහනක් එක් කරයි.  කවුරුහරි ඔබේ පෙරහන ලියන්නේ නම්, එය පිළිතුර යවයි.  ඔබ. ෆිල්ටරය ලියන්නේ නම්, එය ඔබේ පෙරහන් ලැයිස්තුව පෙන්වයි.  

🔱 Command: .stop 
🔰 Description: ඔබ කලින් එකතු කළ පෙරහන නවත්වන්න . 

🔱 Command: .gm
🔰 Description: it sends good morning message 

🔱 Command: .gn
🔰 Description: it sends good night message 

🔱 Command: .welcome
🔰 Description: එය පිළිගැනීමේ පණිවිඩය සකසයි.  ඔබ එය හිස්ව තැබුවහොත් එය පිළිගැනීමේ පණිවිඩය පෙන්වයි . 

🔱 Command: .goodbye
🔰 Description: සමුගැනීමේ පණිවිඩය සකසයි.  ඔබ හිස්ව තැබුවහොත්, එය ආයුබෝවන් පණිවිඩය පෙන්නුම් කරයි . 

🔱 Command: .help 
🔰 Description: Gives information about using the bot from the Help menu. 

🔱 Command: .degis 

🔱 Command: .restart
🔰 Description: බොට් නැවත ආරම්භ කිරීම  

🔱 Command: .shutdown
🔰 Description: BOT වසා දැමීම  

🔱 Command: .dyno
🔰 Description: හෙරෝකු ඩයිනෝ භාවිතය පරීක්‍ෂා කරන්න 

🔱 Command: .setvar 
🔰 Description: Heroku config var සකසන්න  

🔱 Command: .delvar 
🔰 Description: හෙරෝකු වින්‍යාස සංස්කරණය මකන්න  

🔱 Command: .getvar 
🔰 Description: Heroku config config ලබා ගන්න  

🔱 Command: .locate
🔰 Description: එය ඔබේ ස්ථානය යවයි . 
⚠️ Warn: විධානය භාවිතා කිරීමට පෙර කරුණාකර ඔබේ ස්ථානය විවෘත කරන්න !

🔱 Command: .log
🔰 Description: ඔබේ පුද්ගලික අංකයට ඔබ පිළිතුරු දෙන පණිවිඩය සුරකිනු ඇත. 
⚠️ Warn: Does not support animated stickers!

🔱 Command: .logo

🔱 Command: .meme 
🔰 Description: ඡායාරූප memes ඔබ පිළිතුරු දුන්නා . 

🔱 Command: .dumi
🔰 Description: එය අධි විභේදන බිතුපත් යවයි . 

🔱 Command: .insta 
🔰 Description: Downloads Image/Video From Instagram 

🔱 Command: .fb 
🔰 Description: Downloads Video From FaceBook 

🔱 Command: .neko
🔰 Description: පිළිතුරු දුන් පණිවිඩ එකතු කරනු ඇත  nekobin.com. 

🔱 Command: .notes
🔰 Description: Shows all your existing notes. 

🔱 Command: .save 
🔰 Description: Reply a message and type .save or just use .save <Your note> without replying 

🔱 Command: .deleteNotes
🔰 Description: Deletes *all* your saved notes. 

🔱 Command: .ocr 
🔰 Description: ඔබ පිළිතුරු දුන් ඡායාරූපයෙහි පාඨය කියවයි . 

🔱 Command: .kickme
🔰 Description: ඔබ එය භාවිතා කරන කණ්ඩායමෙන් එය ඔබව පන්නා දමයි . 

🔱 Command: .pp
🔰 Description: ඔබ පිළිතුරු දෙන ඡායාරූපය පැතිකඩ ඡායාරූපය බවට පත් කරයි . 

🔱 Command: .block 
🔰 Description: පරිශීලකයා අවහිර කරන්න . 

🔱 Command: .unblock 
🔰 Description: පරිශීලකයා අවහිර කරන්න . 

🔱 Command: .jid 
🔰 Description: පරිශීලකයාගේ JID ලබා දීම . 

🔱 Command: .removebg 
🔰 Description: ඡායාරූප වල පසුබිම ඉවත් කරයි.  

🔱 Command: .report 

🔱 Command: .scam 
🔰 Description: මිනිත්තු 5 ක ව්‍යාජ ක්‍රියාවන් නිර්මානය කරයි . 

🔱 Command: .scan 

🔱 Command: .trt
🔰 Description: එය Google පරිවර්තනය සමඟ පරිවර්තනය කරයි.  ඔබ ඕනෑම පණිවිඩයකට පිළිතුරු දිය යුතුය . 
⌨️ Example: .trt tr it (From Turkish to Italian)

🔱 Command: .detectlang

🔱 Command: .currency

🔱 Command: .tts 
🔰 Description: එය පෙළ ශබ්දය බවට පරිවර්තනය කරයි . 

🔱 Command: .song 
🔰 Description: ඔබ ලියූ ගීතය උඩුගත කරයි . 

🔱 Command: .video 
🔰 Description: යූටියුබ් වෙතින් වීඩියෝ බාගැනීම් . 

🔱 Command: .yt 
🔰 Description: එය යූ ටියුබ් හි සොයයි . 

🔱 Command: .wiki 
🔰 Description: විකිපීඩියාවේ විමසුම සොයයි . 

🔱 Command: .img 
🔰 Description: අදාළ පින්තූර ගූගල් හි සොයයි . 

🔱 Command: .github 
🔰 Description: Collects github information from the given username.
⌨️ Example: .github phaticusthiccy 

🔱 Command: .lyric 
🔰 Description: Finds the lyrics of the song. 

🔱 Command: .covid 
🔰 Description: රටවල් 15 කට වැඩි ගණනක දෛනික සහ සමස්ත කොවිඩ් වගුව පෙන්වයි . 

🔱 Command: .ss 
🔰 Description: ලබා දී ඇති සම්බන්ධකයේ පිටුවෙන් තිර රුවක් ගනී . 

🔱 Command: .insta 
🔰 Description: Fetches user informations from instagram 

🔱 Command: .animesay 
🔰 Description: ඇනිමෙ දැරිය තබා ඇති බැනරය තුළ එය පෙළ ලියයි  

🔱 Command: .changesay 
🔰 Description: මගේ මනස වෙනස් කරන්න පෝස්ටරය බවට පෙළ හරවන්න.  

🔱 Command: .trumpsay 
🔰 Description: පෙළ ට්‍රම්ප්ගේ ට්වීට් වෙත පරිවර්තනය කරන්න.  

🔱 Command: .audio spam

🔱 Command: .foto spam

🔱 Command: .sticker spam

🔱 Command: .vid spam

🔱 Command: .killspam
🔰 Description: අයාචිත තැපැල් විධානය නතර කරයි.  

🔱 Command: .spam 
🔰 Description: ඔබ නවත්වන තුරු එය ස්පෑම් ය t.
⌨️ Example: .spam DUMI BOT 

🔱 Command: .sticker
🔰 Description: එය ඔබට පිළිතුරු දුන් ඡායාරූපය හෝ වීඩියෝ පටය ස්ටිකරයක් බවට පත් කරයි . 

🔱 Command: .alive
🔰 Description: බොට් වැඩ කරනවද?  

🔱 Command: .sysd
🔰 Description: පද්ධති ගුණාංග පෙන්වයි.  

🔱 Command: .tagadmin

🔱 Command: .tagall 
🔰 Description: කණ්ඩායමේ සියලුම දෙනාට ටැග් කරන්න. 

🔱 Command: .stam

🔱 Command: .tblend 
🔰 Description: වීඩියෝ සඳහා තෝරා ගත් ටීබීලන්ඩ් බලපෑම අදාළ වේ . 

🔱 Command: .texttoimg

🔱 Command: .ttp 
🔰 Description: පෙළ සරල සිතුවම් බවට පරිවර්තනය කරයි . 

🔱 Command: .attp 
🔰 Description: දේදුනු ආචරණය ස්ටිකරයක් ලෙස පෙළට එක් කරයි. 

🔱 Command: .unvoice
🔰 Description: ශ්‍රව්‍ය ශබ්ද පටිගත කිරීම බවට පරිවර්තනය කරයි . 

🔱 Command: .update
🔰 Description: යාවත්කාලීන පරීක්ෂා කරයි . 

🔱 Command: .update now
🔰 Description: එය යාවත්කාලීන කරයි. . 

🔱 Command: .voicy
🔰 Description: එය ශ්‍රව්‍ය පෙළට පරිවර්තනය කරයි . 

🔱 Command: .wallpaper
🔰 Description: එය අධි විභේදන බිතුපත් යවයි . 

🔱 Command: .weather 
🔰 Description: නකාලගුණය පෙන්වන්න . 

🔱 Command: .speedtest
🔰 Description: බාගැනීමේ හා උඩුගත කිරීමේ වේගය මැනීම . 

🔱 Command: .ping
🔰 Description: ඔබේ පිං මැනීම . 

🔱 Command: .short 
🔰 Description: දිගු සම්බන්ධකය කෙටි කරන්න . 

🔱 Command: .calc 

🔱 Command: .molu

🔱 Command: .whois
🔰 Description: කණ්ඩායමේ හෝ පුද්ගලයාගේ පාර -දත්ත දත්ත පෙන්වයි .
╚═══════════════════════════════
═════💢DUMI BOT💢═════
▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣
`}) 

}));

