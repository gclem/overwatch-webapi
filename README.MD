# overwatch-webapi
Lighweight Web API self-Host based on overwatch-js npm package functionnalities.

# This repository is DEPRECATED 

# Dependencies
`Overwatch-js` : NodeJS Overwatch library : Retrieve informations about heroes/players from Overwatch Official Website [Overwatch-js NPM](https://www.npmjs.com/package/overwatch-js)
[Overwatch-js Github](https://github.com/gclem/overwatch-js)

# Self-hosted
You can consume this web api as much as needed.
I will do my best to ensure maximum performances & availabilities.

URL : [https://owjs.ovh](https://owjs.ovh)

# Gracefully hosted :-) Feel free to donate
This projet is self-hosted on my servers and domains.
To keep using this service as long as possible, feel free to donate. 

Your donations will permit to scale the server for **intensive uses**.

# Intensive uses
It's OKAY :-) but everybody is the same boat. Take care each others.

[Donate on Paypal](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=7FW6VHFGTJ6LL)

# Install

#### Requirements
* Node v6.0+

#### Modules
```bash
npm install
```

#### SSL
If you want to enable SSL, go to config/default.json and set `ssl.enabled` to `true`

```javascript
    "ssl" : {
        "enable" : false,
        "key" : "",
        "cert" : ""
    }
```
#### Launch

You can set the port, setting the ENV variable `PORT`.

With `pm2`

```javascript
  pm2 start app.js
```

With `npm`

```javascript
  npm start app.js
```

# Functionalities
* Search for a player 
* Global profile datas
* Career profile datas with heroes statistics

#### Search for a player : 
`GET https://owjs.ovh/search/:username`

* `username` : battletag

#### Overall statistics : 
`GET https://owjs.ovh/overall/:platform/:region/:tag`

* `:platform` : pc|xbl|psn
* `:region` eu|us etc..
* `:tag` battletag

#### All statistics with heroes details : 
`GET https://owjs.ovh/all/:platform/:region/:tag`

* `:platform` : pc|xbl|psn
* `:region` eu|us etc..
* `:tag` battletag

#### Available informations :

``` javascript
{ profile: 
   { nick: 'Zeya',
     level: 76,
     avatar: 'https://blzgdapipro-a.akamaihd.net/game/unlocks/0x02500000000008B8.png',
     rank: 2065,
     rankPicture: 'https://blzgdapipro-a.akamaihd.net/game/rank-icons/season-2/rank-3.png',
     tier:'0',
     season: { id:'2',rank:'2'},
     ranking: 'Gold',
     platform: '',
     url: 'https://playoverwatch.com/en-us/career/pc/eu/Zeya-2303' },
  competitive: 
   { global: 
      { eliminations_average: 20.08,
        damage_done_average: 11894,
        deaths_average: 9.42,
        final_blows_average: 10.44,
        healing_done_average: 1307,
        objective_kills_average: 7.97,
        objective_time_average: 0,
        solo_kills_average: 2.75,
        solo_kills: 284,
        objective_kills: 821,
        final_blows: 1076,
        damage_done: 1225043,
        eliminations: 2069,
        environmental_kills: 6,
        multikills: 22,
        recon_assists: 2,
        healing_done: 134581,
        teleporter_pad_destroyed: 1,
        eliminations_most_in_game: 48,
        final_blows_most_in_game: 26,
        damage_done_most_in_game: 29922,
        healing_done_most_in_game: 13568,
        defensive_assists_most_in_game: 21,
        offensive_assists_most_in_game: 11,
        objective_kills_most_in_game: 26,
        objective_time_most_in_game: 5,
        multikill_best: 5,
        solo_kills_most_in_game: 26,
        time_spent_on_fire_most_in_game: 6,
        time_spent_on_fire_average: 0,
        deaths: 971,
        environmental_deaths: 36,
        cards: 31,
        medals: 255,
        medals_gold: 87,
        medals_silver: 88,
        medals_bronze: 80,
        games_played: 103,
        games_won: 48,
        time_spent_on_fire: 1,
        objective_time: 1,
        time_played: 20,
        games_tied: 9,
        games_lost: 46,
        recon_assists_average: 0,
        defensive_assists: 97,
        defensive_assists_average: 1,
        offensive_assists: 41,
        offensive_assists_average: 0 },
     heroes: 
      { reaper: [Object],
        mercy: [Object],
        'torbjörn': [Object],
        reinhardt: [Object],
        pharah: [Object],
        winston: [Object],
        widowmaker: [Object],
        bastion: [Object],
        zenyatta: [Object],
        roadhog: [Object],
        mccree: [Object],
        junkrat: [Object],
        zarya: [Object],
        'soldier:_76': [Object],
        'lúcio': [Object],
        ana: [Object] } },
  quickplay: 
   { global: 
      { eliminations_average: 12.4,
        damage_done_average: 5101,
        deaths_average: 6.02,
        final_blows_average: 7.22,
        healing_done_average: 637,
        objective_kills_average: 4.19,
        objective_time_average: 0,
        solo_kills_average: 2.86,
        solo_kills: 839,
        objective_kills: 1229,
        final_blows: 2118,
        damage_done: 1494671,
        eliminations: 3634,
        environmental_kills: 8,
        multikills: 27,
        recon_assists: 17,
        healing_done: 186615,
        eliminations_most_in_game: 36,
        final_blows_most_in_game: 24,
        damage_done_most_in_game: 27803,
        healing_done_most_in_game: 13510,
        defensive_assists_most_in_game: 13,
        offensive_assists_most_in_game: 5,
        objective_kills_most_in_game: 20,
        objective_time_most_in_game: 2,
        multikill_best: 4,
        solo_kills_most_in_game: 24,
        time_spent_on_fire_most_in_game: 7,
        time_spent_on_fire_average: 0,
        deaths: 1764,
        environmental_deaths: 40,
        cards: 92,
        medals: 821,
        medals_gold: 274,
        medals_silver: 278,
        medals_bronze: 269,
        games_won: 145,
        time_spent_on_fire: 3,
        objective_time: 1,
        time_played: 37,
        recon_assists_average: 0,
        defensive_assists: 72,
        defensive_assists_average: 0,
        offensive_assists: 9,
        offensive_assists_average: 0 },
     heroes: 
      { reaper: [Object],
        tracer: [Object],
        mercy: [Object],
        hanzo: [Object],
        'torbjörn': [Object],
        reinhardt: [Object],
        pharah: [Object],
        winston: [Object],
        widowmaker: [Object],
        bastion: [Object],
        symmetra: [Object],
        genji: [Object],
        roadhog: [Object],
        mccree: [Object],
        junkrat: [Object],
        zarya: [Object],
        'soldier:_76': [Object],
        'lúcio': [Object],
        'd.va': [Object],
        mei: [Object],
        ana: [Object] 
      } 
    },
 achievements: 
   [ { acquired: true,
       thumbnail: 'https://blzgdapipro-a.akamaihd.net/game/achievements/0x0E60000000000156.png',
       title: 'Centenary',
       description: 'Win 100 games in Quick or Competitive Play.',
       category: 'general' },
     { acquired: true,
       thumbnail: 'https://blzgdapipro-a.akamaihd.net/game/achievements/0x0E60000000000157.png',
       title: 'Level 10',
       description: 'Reach level 10.',
       category: 'general' },
     { acquired: true,
       thumbnail: 'https://blzgdapipro-a.akamaihd.net/game/achievements/0x0E60000000000158.png',
       title: 'Level 25',
       description: 'Reach level 25.',
       category: 'general' },
     { acquired: true,
       thumbnail: 'https://blzgdapipro-a.akamaihd.net/game/achievements/0x0E60000000000159.png',
       title: 'Level 50',
       description: 'Reach level 50.',
       category: 'general' },
     { acquired: true,
       thumbnail: 'https://blzgdapipro-a.akamaihd.net/game/achievements/0x0E6000000000015D.png',
       title: 'Undying',
       description: 'Get a 20 player kill streak in Quick or Competitive Play.',
       category: 'general' }
     [...] 
   ]
}
```

## License
MIT
