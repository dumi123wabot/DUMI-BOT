/* # Exclusively from RAVANA
*/

const RAVANA = require( ../events );
const { MessageType, MessageOptions, Mimetype } = require( @adiwajshing/baileys );
const fs = require( fs );
const axios = require( axios );
const Config = require( ../config );
const need = "type some word after command\n🗡🗡"

if (Config.WORKTYPE ==  private ) {

    RAVANA.addCommand({ pattern:  bpack ?(.*) , fromMe: true,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] ===   ) return await message.sendMessage(need);

        var ttinullimage = await axios.get(`https://api.zeks.xyz/api/logobp?apikey=2U6LNfrIDBoUTp93An2aX0pw6LK&text=${encodeURIComponent(match[1])}`, { responseType:  arraybuffer  })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})

    }));
}

else if (Config.WORKTYPE ==  public ) {

    RAVANA.addCommand({ pattern:  bpack ?(.*) , fromMe: false,dontAddCommandList: true}, (async (message, match) => {

        if (match[1] ===   ) return await message.sendMessage(need);

        var ttinullimage = await axios.get(`https://api.zeks.xyz/api/logobp?apikey=2U6LNfrIDBoUTp93An2aX0pw6LK&text=${encodeURIComponent(match[1])}`, { responseType:  arraybuffer  })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})

    }));
    
}
