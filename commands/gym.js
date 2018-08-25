const Discord = require("discord.js");
const superagent = require("superagent");

module.exports.run = async (bot, message, args) => {
    
    if(args[0] == "station"){

        let stationembed = new Discord.RichEmbed()
        .setDescription("GYMS FOR B.S.E")
        .setColor("#fc9f1e")
        .setImage("https://lh3.ggpht.com/Yh_kLu643kZ2NvZsXuFMPYyov9IPPFSm9TRMYYgDTscdYsKZO_OU93Slwvjbhlzvz2hrpICQnjdXBKO4ph4Yi3kwV_IkXlX04Jn9BYjRPeJo4pvQ")
        .addField("B.S.E GYM", "Bury St. Edmunds Station\n[Click Here For Directions](https://goo.gl/wK7UEz)");
    
    message.channel.send(stationembed);

    
            return;

    
             };

        
if(args[0] == "panda"){

        let pandaembed = new Discord.RichEmbed()
        .setDescription("GYMS FOR B.S.E")
        .setColor("#fc9f1e")
        .setImage("https://lh4.ggpht.com/B98uL62TpK0BxXtpciky716S_nrAiaufd9V4Hai-ROfJi2K5RMC0lZAaMwnDv5QXO8WpHJMlYyoc4A9fKTL7")
        .addField("B.S.E GYM", "Carved Panda Nowton Park\n[Click Here For Directions](https://www.google.com/maps/dir//52.218897,0.734781/@52.2177097,0.665554,12z)");
    
    message.channel.send(pandaembed);
            return;
        
             };        

    
             if(args[0] == "crimean"){

                let crimeanembed = new Discord.RichEmbed()
                .setDescription("GYMS FOR B.S.E")
                .setColor("#fc9f1e")
                .setImage("https://lh6.ggpht.com/aHr2_SkJpRtrdCnBZ-RrXw68qMNQbobD483EHNtx9oCirxlOvCqlG6W14uGuzctx99ceMxEUudrVWKDoQQ_p")
                .addField("B.S.E GYM", "Crimean War Memorial\n[Click Here For Directions](https://www.google.com/maps/dir//52.246053,0.712463/@52.2462742,0.7115374,18z)");
            
            message.channel.send(crimeanembed);
                 
                    return;
               
                     };
        
                
        if(args[0] == "memorial"){
        
                let memorialembed = new Discord.RichEmbed()
                .setDescription("GYMS FOR B.S.E")
                .setColor("#fc9f1e")
                .setImage("https://lh3.ggpht.com/88b6qg3130D1TxYRlP2ilJ8t3KDYycBLtHDGpFWdjBjKv0Zi_7BWsjdpRa9PntgcuhGVb9jJtC1DIytJiLEt")
                .addField("B.S.E GYM", "First World War Memorial\n[Click Here For Directions](https://www.google.com/maps/dir//52.243446,0.70106/@52.2439172,0.6978391,16z)");
            
            message.channel.send(memorialembed);
                    return;
                
                     };        

    
                     if(args[0] == "home"){
        
                        let homeembed = new Discord.RichEmbed()
                        .setDescription("GYMS FOR B.S.E")
                        .setColor("#fc9f1e")
                        .setImage("https://lh3.ggpht.com/PYU7tmsrOL49tvDMpPcQMNiWxURJAMvUfcUnjZDLJixdcNkzcjadRGmuMui1968B8l9wHaifLBpVgDCu_wGp")
                        .addField("B.S.E GYM", "Home Covert\n[Click Here For Directions](https://www.google.com/maps/dir//52.245244,0.741294/@52.2453674,0.6708257,12z)");
                    
                    message.channel.send(homeembed);
                         
                            return;
                       
                             };
                
                        
                if(args[0] == "layhill"){
                
                        let layhillembed = new Discord.RichEmbed()
                        .setDescription("GYMS FOR B.S.E")
                        .setColor("#fc9f1e")
                        .setImage("https://lh3.googleusercontent.com/414RpnvwzDbi-Xp2j8J34DcN25eV6bNgrPx_Kh1DV1KQGxnZYzgyuH4F1MmsM4RVSAnMvc_oMxVgI3Z00eyo")
                        .addField("B.S.E GYM", "Lay Hill Covert (Near Symonds Road)\n[Click Here For Directions](https://www.google.co.uk/maps/place/52°14%2729.2%22N+0°43%2755.4%22E/@52.241442,0.732046,16z)");
                    
                    message.channel.send(layhillembed);
                            return;
                        
                             };
    
        if(args[0] == "metal"){
                let metalembed = new Discord.RichEmbed()
                .setDescription("GYMS FOR B.S.E")
                .setColor("#fc9f1e")
                .setImage("https://lh3.googleusercontent.com/9WgNusBnmgFW3kak-w-JY7lngMNE3arscclX5P39-CQHYTbycUUBmdtmNJAoeRnn-We9YXMCdlxOmAe6Kvo")
                .addField("B.S.E GYM", "Metal Dandelion\n[Click Here For Directions](https://www.google.com/maps/dir//52.245519,0.711127/@52.2456737,0.7072434,16z)");
                            
    message.channel.send(metalembed);
                        
                            
return;
                        
                            
                            };
                        
                                
        if(args[0] == "methodist"){
                        
                let methodistembed = new Discord.RichEmbed()
                .setDescription("GYMS FOR B.S.E")
                .setColor("#fc9f1e")
                .setImage("https://lh6.ggpht.com/dZN0h_H7oFmBIahcGypQaiFulK6fGSPijvHXv_3UGo69ID8AgAtWEw7K7LephWEXHUdRXF-iX4Qehgfjcdpp")
                .addField("B.S.E GYM", "Methodist Church, Northumberland Avenue\n[Click Here For Directions](https://www.google.com/maps/dir//52.260849,0.697478/@52.2609311,0.6929733,16z)");
                            
        message.channel.send(methodistembed);
return;
                            
        };        
                        
                            
    if(args[0] == "model"){
                        
                let modelembed = new Discord.RichEmbed()
                .setDescription("GYMS FOR B.S.E")
                .setColor("#fc9f1e")
                .setImage("https://lh6.ggpht.com/QhUlpe2yzwgro06qoJbu7OKvkBRPOYfYNNC7cmV6M8jG7Qs-Zvu5lHbfRThD2SQngMcGhDlifZwnfexeNcMx")
                .addField("B.S.E GYM", "Model of Abbey Church\n[Click Here For Directions](https://www.google.com/maps/dir//52.245191,0.718999/@52.2459696,0.71728,18z)");
                                    
    message.channel.send(modelembed);
                                         
return;
                                       
        };
                                
                                        
    if(args[0] == "natters"){
                                
                let nattersembed = new Discord.RichEmbed()
                .setDescription("GYMS FOR B.S.E")
                .setColor("#fc9f1e")
                .setImage("https://lh3.ggpht.com/gDF0M6pBr4fBBta6fWbsF4Fltc2SYAN0tGDQP9Bzp4WLDxmazHy4NXjiQss0G_k-pBmKvii6FI2ZX0Ypdz8")
                .addField("B.S.E GYM", "Natterers Wood Woodland Walk Bottom Entrance\n[Click Here For Directions](https://www.google.com/maps/dir//52.247915,0.729677/@52.2480743,0.7289914,18z)");
                                    
    message.channel.send(nattersembed);
return;
                                        
        };        
                        
                            
    if(args[0] == "nowton"){
                                
                let nowtonembed = new Discord.RichEmbed()
                .setDescription("GYMS FOR B.S.E")
                .setColor("#fc9f1e")
                .setImage("https://lh5.ggpht.com/8-Qvv4Y3XlEBg61WrXefBF68IMiLaLUvDJmvkTIwEZ_mkGTe0JxTOLk6m7XVXIHYLQr5YxB5vJYADwBeUgmM8Q")
                .addField("B.S.E GYM", "Nowton Park\n[Click Here For Directions](https://www.google.com/maps/dir//52.226765,0.728316/@52.2268378,0.7266132,17.08z)");
                                            
    message.channel.send(nowtonembed);
                                                 
return;
                                               
        };
                                        
                                                
    if(args[0] == "totem"){
                                        
                let totemembed = new Discord.RichEmbed()
                .setDescription("GYMS FOR B.S.E")
                .setColor("#fc9f1e")
                .setImage("https://lh4.ggpht.com/vH2ThHQ9fOuh3jC4edOx18wX34EHIedkLMwnulVKzxIvn1Lsilc5lfAB_RSYu2QjbM9gBaTXK3TmIeyn-d0")
                .addField("B.S.E GYM", "Nowton Park Totem\n[Click Here For Directions](https://www.google.com/maps/dir//52.217401,0.72986/@52.2176243,0.7287842,18z)");
                                            
    message.channel.send(totemembed);
return;
                                                
        };
                        
        if(args[0] == "woodland"){
                                
            let woodlandembed = new Discord.RichEmbed()
            .setDescription("GYMS FOR B.S.E")
            .setColor("#fc9f1e")
            .setImage("https://lh5.ggpht.com/tCQB-fKQdDLFwnOTsLcpLOXm-ulpzNuMylOLMzLz2h5Y_mAmoV_-VVIdYXCbvaLQ2M378uw0pVw-3lkcCfo6")
            .addField("B.S.E GYM", "Nowton Park Woodland Garden\n[Click Here For Directions](https://www.google.com/maps/dir//52.221002,0.730567/@52.2206422,0.6587901,12z)");
                                        
message.channel.send(woodlandembed);
                                             
return;
                                           
    };
                        
    if(args[0] == "owl"){
                                
        let owlembed = new Discord.RichEmbed()
        .setDescription("GYMS FOR B.S.E")
        .setColor("#fc9f1e")
        .setImage("https://lh5.ggpht.com/N16KgfM4GL1-tFFtze9i9fgvCOC--NQfpmsyTuVihL8w1c7RERtQa9GnNsTfDa4w0Ba0JDerZ1dqH0x7FZ0")
        .addField("B.S.E GYM", "Owl on a Stick\n[Click Here For Directions](https://www.google.com/maps/dir//52.245217,0.718057/@52.2456929,0.7128976,16z)");
                                    
message.channel.send(owlembed);
                                         
return;
                                       
};
                        
if(args[0] == "pond"){
                                
    let pondembed = new Discord.RichEmbed()
    .setDescription("GYMS FOR B.S.E")
    .setColor("#fc9f1e")
    .setImage("https://lh3.googleusercontent.com/Wn-DjXJTd17-fpbu4BqrQJktA1S3UfgjhRRx1IF2nPkwz63T7BGWaR2MUVogdNIi_-LGlzqfDib4SWexic1mpw")
    .addField("B.S.E GYM", "Pond Covert (Near Symonds Road)\n[Click Here For Directions](https://www.google.com/maps/dir//52.243838,0.73771/@52.2437337,0.7325786,16z)");
                                
message.channel.send(pondembed);
                                     
return;
                                   
};
                        
if(args[0] == "wire"){
                                
    let wireembed = new Discord.RichEmbed()
    .setDescription("GYMS FOR B.S.E")
    .setColor("#fc9f1e")
    .setImage("https://lh4.ggpht.com/dtw9qjWLZXjvbucf6EJJ41hyrNkh_5cpBihttTUc3G-5nnwbRZ9IWZGyG-9eWAeGE8RQOrCl3knB01bYEdhR")
    .addField("B.S.E GYM", "Saint Edmund Sculpture In Wire\n[Click Here For Directions](https://www.google.com/maps/dir//52.247677,0.706805/@52.2474583,0.7062248,19z)");
                                
message.channel.send(wireembed);
                                     
return;
                                   
};
                        
if(args[0] == "salvation"){
                                
    let salvationembed = new Discord.RichEmbed()
    .setDescription("GYMS FOR B.S.E")
    .setColor("#fc9f1e")
    .setImage("https://lh5.ggpht.com/PZmax_3enHnc67IX0-U1xzFdJTzA5bhOMadJ5n2cQ4Xxu-JrStJZXR5grqn3L25jUxpmogP_dmEVLuwryM8")
    .addField("B.S.E GYM", "Salvation\n[Click Here For Directions](https://www.google.com/maps/dir//52.250226,0.713044/@52.2501642,0.708583,16z)");
                                
message.channel.send(salvationembed);
                                     
return;
                                   
};
                        
if(args[0] == "spring"){
                                
    let springembed = new Discord.RichEmbed()
    .setDescription("GYMS FOR B.S.E")
    .setColor("#fc9f1e")
    .setImage("https://lh5.ggpht.com/4lK72T9VO2cOGkV4q8vaj1p83fuC5T0PifsJC6vzFM7Wv4oNYhVksHxnCUV7dkz25UJ0n7BwD6oaOWiXAclN7g")
    .addField("B.S.E GYM", "Spring Lane & Tayfen Reserve\n[Click Here For Directions](https://www.google.com/maps/dir//52.253408,0.702506/@52.2534299,0.700499,17z)");
                                
message.channel.send(springembed);
                                     
return;
                                   
};
                        
if(args[0] == "spy"){
                                
    let spyembed = new Discord.RichEmbed()
    .setDescription("GYMS FOR B.S.E")
    .setColor("#fc9f1e")
    .setImage("https://lh3.ggpht.com/cC4x17Lm7tcG0KubOODPHwo4aTYlLUWt6GgNRGi_O75159-iVxclKcNRqCRFxkrZIvqWqJD6oLAT1sMM2Ew9hg")
    .addField("B.S.E GYM", "Spy\n[Click Here For Directions](https://www.google.com/maps/dir//52.241051,0.708004/@52.2411168,0.7034581,16z)");
                                
message.channel.send(spyembed);
                                     
return;
                                   
};
                        
if(args[0] == "peters"){
                                
    let petersembed = new Discord.RichEmbed()
    .setDescription("GYMS FOR B.S.E")
    .setColor("#fc9f1e")
    .setImage("https://lh4.ggpht.com/364okieCjx4LEPV2maWKPGYqOPwSWTN3FCtYuDbpiumN9HGgOIzAFqO7JU0EiQuGEJC9on6k1zKUbym61BUZ")
    .addField("B.S.E GYM", "St. Peter's Church\n[Click Here For Directions](https://www.google.com/maps/dir//52.24104,0.709634/@52.2397014,0.4202659,11z)");
                                
message.channel.send(petersembed);
                                     
return;
                                   
};
                        
if(args[0] == "norman"){
                                
    let normanembed = new Discord.RichEmbed()
    .setDescription("GYMS FOR B.S.E")
    .setColor("#fc9f1e")
    .setImage("https://lh3.ggpht.com/tmCp1AetC0pqRT5mb_sMV4o72cXAP4L4ChtkIAk7YcE4JYyqd-HTaN8nIrnzCzvhlJru4hJ4e-8UYvphKYBn")
    .addField("B.S.E GYM", "The Norman Tower\n[Click Here For Directions](https://www.google.com/maps/dir//52.243599,0.716594/@52.2577679,0.4160264,11z)");
                                
message.channel.send(normanembed);
                                     
return;
                                   
};
                        
if(args[0] == "theatre"){
                                
    let theatreembed = new Discord.RichEmbed()
    .setDescription("GYMS FOR B.S.E")
    .setColor("#fc9f1e")
    .setImage("https://lh5.ggpht.com/cV2ajxC_-FjjBgXGkT7o4LdJdWVzzIPQTvfZ99Lrm8-Nhcv-5afzRjdu6BapMlGinq60y8fEnnOANbpQZddVOA")
    .addField("B.S.E GYM", "The Theatre Royal\n[Click Here For Directions](https://www.google.com/maps/dir//52.240637,0.717167/@52.2406689,0.7127441,16z)");
                                
message.channel.send(theatreembed);
                                     
return;
                                   
};
                        
if(args[0] == "westroad"){
                                
    let westroadembed = new Discord.RichEmbed()
    .setDescription("GYMS FOR B.S.E")
    .setColor("#fc9f1e")
    .setImage("https://lh4.ggpht.com/MA_leBziL30xin-vXzUeLdUJmCL6VrxmAljXiKLf-zxfMJCjiyO72t3SOdQJqqfAs4vwcRF2prFlIgX51EF3-g")
    .addField("B.S.E GYM", "West Road Church\n[Click Here For Directions](https://www.google.com/maps/dir//52.244898,0.697051/@52.2448464,0.6926903,16z)");
                                
message.channel.send(westroadembed);
                                     
return;
                                   
};
                        
if(args[0] == "college"){
                                
    let collegeembed = new Discord.RichEmbed()
    .setDescription("GYMS FOR B.S.E")
    .setColor("#fc9f1e")
    .setImage("https://lh3.ggpht.com/Mm_h2uqA2ZzikI7X9V4OF1KytmTa2C6zbdCaC4bOyYgRtzfVctaZZtXSi1g51kF7PTIkUEWQLc5HDGjzaas")
    .addField("B.S.E GYM", "West Suffolk College Sign\n[Click Here For Directions](https://www.google.com/maps/dir//52.247815,0.700021/@52.2476229,0.6965805,16z)");
                                
message.channel.send(collegeembed);
                                     
return;
                                   
};

message.channel.send("Please tell me the name of the gym");


return;

};

module.exports.help = {
    name: "gym"
}