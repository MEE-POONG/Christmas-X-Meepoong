import { BigHead,theme,eyesMap,eyebrowsMap,mouthsMap,hairMap,facialHairMap,clothingMap,accessoryMap,graphicsMap,hatMap,bodyMap } from '@bigheads/core'

function SelectRandomKey(object) {
    return Object.keys(object)[
        Math.floor(Math.random() * Object.keys(object).length)
    ];
    
}

export function getRandomOption(){
    const skinTone =SelectRandomKey(theme.colors.skin)
    const eye = SelectRandomKey(eyesMap)
    const eyebrows = SelectRandomKey(eyebrowsMap.colors.skin)
    const mouth = SelectRandomKey(mouthsMap)
    const hair = SelectRandomKey(hairMap)
    const facialHair =SelectRandomKey(facialHairMap)
    const clothing = SelectRandomKey(clothingMap)
    const accessory = SelectRandomKey(accessoryMap)
    const graphic = SelectRandomKey(graphicMap)
    const hat = SelectRandomKey(hatMap)
    const body = SelectRandomKey(bodyMap)

    const hairColor = SelectRandomKey(theme.colors.hair)
    const clothingColor = SelectRandomKey(theme.colors.clothing)
    const lipColor = SelectRandomKey(theme.colors.lipColors)
    const hatColor = SelectRandomKey(theme.colors.clothing)
    const faceMaskColor = SelectRandomKey(theme.colors.clothing)

    const mask = true;
    const faceMask = false;
    const lashes = Math.random() >0.5;

return{
    skinTone,
    eye,
    eyebrows,
    mouth,
    hair,
    facialHair,
    clothing,
    accessory,
    graphic,
    hat,
    body,
    hairColor,
    clothingColor,
    lipColor,
    hatColor,
    faceMaskColor,
    mask,
    faceMask,
    lashes
    
}
function Show ()
{
    return {
        
     
    }
}
}