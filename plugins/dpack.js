/* # Exclusively from DUMI BOT
*/

const dgang = require( ../events );
const { MessageType, MessageOptions, Mimetype } = require( @adiwajshing/baileys );
const fs = require( fs );
const axios = require( axios );
const Config = require( ../config );
const need = "some command are not working it s not our false.it is logo site errors.\n🗡🗡"

if (Config.WORKTYPE ==  private ) {

    RAVANA.addCommand({ pattern:  dpack ?(.*) , fromMe: true,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] ===   ) return await message.sendMessage(need);

        var ttinullimage = await axios.get(`https://api.xteam.xyz/api/logobp?apikey=82ec8d393c190f92&text=${encodeURIComponent(match[1])}`, { responseType:  arraybuffer  })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.MADE BY D-GANG})

    }));
}

else if (Config.WORKTYPE ==  public ) {

    RAVANA.addCommand({ pattern:  dpack ?(.*) , fromMe: false,dontAddCommandList: true}, (async (message, match) => {

        if (match[1] ===   ) return await message.sendMessage(need);

        var ttinullimage = await axios.get(`https://api.xteam.xyz/api/logobp?apikey=82ec8d393c190f92&text=${encodeURIComponent(match[1])}`, { responseType:  arraybuffer  })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.MADE BY D-GANG})

    }));
    
}
