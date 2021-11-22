const dogs = 
[
    'affenpinscher',  'african',     'airedale',
    'akita',          'appenzeller', 'australian',
    'basenji',        'beagle',      'bluetick',
    'borzoi',         'bouvier',     'boxer',
    'brabancon',      'briard',      'buhund',
    'bulldog',        'bullterrier', 'cairn',
    'cattledog',      'chihuahua',   'chow',
    'clumber',        'cockapoo',    'collie',
    'coonhound',      'corgi',       'cotondetulear',
    'dachshund',      'dalmatian',   'dane',
    'deerhound',      'dhole',       'dingo',
    'doberman',       'elkhound',    'entlebucher',
    'eskimo',         'finnish',     'frise',
    'germanshepherd'
  ]

  let res =  dogs.map(dog=>{
      return `{breed: ${dog}, image: 'https://dog.ceo/api/breed/${dog}/images/random'`
  })

  res

  [
    {
      breed: 'affenpinscher',
      image: 'https://images.dog.ceo/breeds/affenpinscher/n02110627_5522.jpg'
    },
    {
      breed: 'african',
      image: 'https://images.dog.ceo/breeds/african/n02116738_5312.jpg'
    },
    {
      breed: 'airedale',
      image: 'https://images.dog.ceo/breeds/airedale/n02096051_3665.jpg'
    },
    {
      breed: 'akita',
      image: 'https://images.dog.ceo/breeds/akita/Akita_inu_blanc.jpg'
    },
    {
      breed: 'appenzeller',
      image: 'https://images.dog.ceo/breeds/appenzeller/n02107908_4931.jpg'
    },
    {
      breed: 'australian',
      image: 'https://images.dog.ceo/breeds/australian-shepherd/pepper.jpg'
    },
    {
      breed: 'basenji',
      image: 'https://images.dog.ceo/breeds/basenji/n02110806_3138.jpg'
    },
    {
      breed: 'beagle',
      image: 'https://images.dog.ceo/breeds/beagle/n02088364_17170.jpg'
    },
    {
      breed: 'bluetick',
      image: 'https://images.dog.ceo/breeds/bluetick/n02088632_4687.jpg'
    },
    {
      breed: 'borzoi',
      image: 'https://images.dog.ceo/breeds/borzoi/n02090622_6204.jpg'
    },
    {
      breed: 'bouvier',
      image: 'https://images.dog.ceo/breeds/bouvier/n02106382_4247.jpg'
    },
    {
      breed: 'boxer',
      image: 'https://images.dog.ceo/breeds/boxer/n02108089_1072.jpg'
    },
    {
      breed: 'brabancon',
      image: 'https://images.dog.ceo/breeds/brabancon/n02112706_1518.jpg'
    },
    {
      breed: 'briard',
      image: 'https://images.dog.ceo/breeds/briard/n02105251_8210.jpg'
    },
    {
      breed: 'buhund',
      image: 'https://images.dog.ceo/breeds/buhund-norwegian/hakon3.jpg'
    },
    {
      breed: 'bulldog',
      image: 'https://images.dog.ceo/breeds/bulldog-boston/n02096585_6238.jpg'
    },
    {
      breed: 'bullterrier',
      image: 'https://images.dog.ceo/breeds/bullterrier-staffordshire/n02093256_10078.jpg'
    },
    {
      breed: 'cairn',
      image: 'https://images.dog.ceo/breeds/cairn/n02096177_470.jpg'
    },
    {
      breed: 'cattledog',
      image: 'https://images.dog.ceo/breeds/cattledog-australian/IMG_1688.jpg'
    },
    {
      breed: 'chihuahua',
      image: 'https://images.dog.ceo/breeds/chihuahua/n02085620_3681.jpg'
    },
    {
      breed: 'chow',
      image: 'https://images.dog.ceo/breeds/chow/n02112137_11273.jpg'
    },
    {
      breed: 'clumber',
      image: 'https://images.dog.ceo/breeds/clumber/n02101556_4994.jpg'
    },
    {
      breed: 'cockapoo',
      image: 'https://images.dog.ceo/breeds/cockapoo/bubbles1.jpg'
    },
    {
      breed: 'collie',
      image: 'https://images.dog.ceo/breeds/collie/n02106030_2522.jpg'
    },
    {
      breed: 'coonhound',
      image: 'https://images.dog.ceo/breeds/coonhound/n02089078_2498.jpg'
    },
    {
      breed: 'corgi',
      image: 'https://images.dog.ceo/breeds/corgi-cardigan/n02113186_10475.jpg'
    },
    {
      breed: 'cotondetulear',
      image: 'https://images.dog.ceo/breeds/cotondetulear/100_2397.jpg'
    },
    {
      breed: 'dachshund',
      image: 'https://images.dog.ceo/breeds/dachshund/Daschund-2.jpg'
    },
    {
      breed: 'dalmatian',
      image: 'https://images.dog.ceo/breeds/dalmatian/cooper1.jpg'
    },
    {
      breed: 'dane',
      image: 'https://images.dog.ceo/breeds/dane-great/n02109047_17874.jpg'
    },
    {
      breed: 'deerhound',
      image: 'https://images.dog.ceo/breeds/deerhound-scottish/n02092002_6575.jpg'
    },
    {
      breed: 'dhole',
      image: 'https://images.dog.ceo/breeds/dhole/n02115913_2524.jpg'
    },
    {
      breed: 'dingo',
      image: 'https://images.dog.ceo/breeds/dingo/n02115641_13565.jpg'
    },
    {
      breed: 'doberman',
      image: 'https://images.dog.ceo/breeds/doberman/n02107142_3709.jpg'
    },
    {
      breed: 'elkhound',
      image: 'https://images.dog.ceo/breeds/elkhound-norwegian/n02091467_5003.jpg'
    },
    {
      breed: 'entlebucher',
      image: 'https://images.dog.ceo/breeds/entlebucher/n02108000_3296.jpg'
    },
    {
      breed: 'eskimo',
      image: 'https://images.dog.ceo/breeds/eskimo/n02109961_16311.jpg'
    },
    {
      breed: 'finnish',
      image: 'https://images.dog.ceo/breeds/finnish-lapphund/mochilamvan.jpg'
    },
    {
      breed: 'frise',
      image: 'https://images.dog.ceo/breeds/frise-bichon/2.jpg'
    },
    {
      breed: 'germanshepherd',
      image: 'https://images.dog.ceo/breeds/germanshepherd/n02106662_21432.jpg'
    },
    {
      breed: 'greyhound',
      image: 'https://images.dog.ceo/breeds/greyhound-italian/n02091032_1481.jpg'
    },
    {
      breed: 'groenendael',
      image: 'https://images.dog.ceo/breeds/groenendael/n02105056_2639.jpg'
    },
    {
      breed: 'havanese',
      image: 'https://images.dog.ceo/breeds/havanese/00100trPORTRAIT_00100_BURST20191030212452971_COVER.jpg'
    },
    {
      breed: 'hound',
      image: 'https://images.dog.ceo/breeds/hound-blood/n02088466_6789.jpg'
    },
    {
      breed: 'husky',
      image: 'https://images.dog.ceo/breeds/husky/n02110185_6564.jpg'
    },
    {
      breed: 'keeshond',
      image: 'https://images.dog.ceo/breeds/keeshond/n02112350_6952.jpg'
    },
    {
      breed: 'kelpie',
      image: 'https://images.dog.ceo/breeds/kelpie/n02105412_3335.jpg'
    },
    {
      breed: 'komondor',
      image: 'https://images.dog.ceo/breeds/komondor/n02105505_345.jpg'
    },
    {
      breed: 'kuvasz',
      image: 'https://images.dog.ceo/breeds/kuvasz/n02104029_4696.jpg'
    },
    {
      breed: 'labrador',
      image: 'https://images.dog.ceo/breeds/labrador/n02099712_4384.jpg'
    },
    {
      breed: 'leonberg',
      image: 'https://images.dog.ceo/breeds/leonberg/n02111129_3917.jpg'
    },
    {
      breed: 'lhasa',
      image: 'https://images.dog.ceo/breeds/lhasa/n02098413_4531.jpg'
    },
    {
      breed: 'malamute',
      image: 'https://images.dog.ceo/breeds/malamute/n02110063_8514.jpg'
    },
    {
      breed: 'malinois',
      image: 'https://images.dog.ceo/breeds/malinois/n02105162_5252.jpg'
    },
    {
      breed: 'maltese',
      image: 'https://images.dog.ceo/breeds/maltese/n02085936_5010.jpg'
    },
    {
      breed: 'mastiff',
      image: 'https://images.dog.ceo/breeds/mastiff-bull/n02108422_612.jpg'
    },
    {
      breed: 'mexicanhairless',
      image: 'https://images.dog.ceo/breeds/mexicanhairless/n02113978_3071.jpg'
    },
    {
      breed: 'mix',
      image: 'https://images.dog.ceo/breeds/mix/Roxy 2.jpg'
    },
    {
      breed: 'mountain',
      image: 'https://images.dog.ceo/breeds/mountain-swiss/n02107574_1871.jpg'
    },
    {
      breed: 'newfoundland',
      image: 'https://images.dog.ceo/breeds/newfoundland/n02111277_5577.jpg'
    },
    {
      breed: 'otterhound',
      image: 'https://images.dog.ceo/breeds/otterhound/n02091635_3409.jpg'
    },
    {
      breed: 'ovcharka',
      image: 'https://images.dog.ceo/breeds/ovcharka-caucasian/IMG_20191130_160405.jpg'
    },
    {
      breed: 'papillon',
      image: 'https://images.dog.ceo/breeds/papillon/n02086910_7909.jpg'
    },
    {
      breed: 'pekinese',
      image: 'https://images.dog.ceo/breeds/pekinese/n02086079_21103.jpg'
    },
    {
      breed: 'pembroke',
      image: 'https://images.dog.ceo/breeds/pembroke/n02113023_5739.jpg'
    },
    {
      breed: 'pinscher',
      image: 'https://images.dog.ceo/breeds/pinscher-miniature/n02107312_7095.jpg'
    },
    {
      breed: 'pitbull',
      image: 'https://images.dog.ceo/breeds/pitbull/20190801_154956.jpg'
    },
    {
      breed: 'pointer',
      image: 'https://images.dog.ceo/breeds/pointer-german/n02100236_3649.jpg'
    },
    {
      breed: 'pomeranian',
      image: 'https://images.dog.ceo/breeds/pomeranian/n02112018_12750.jpg'
    },
    {
      breed: 'poodle',
      image: 'https://images.dog.ceo/breeds/poodle-miniature/n02113712_1795.jpg'
    },
    {
      breed: 'pug',
      image: 'https://images.dog.ceo/breeds/pug/n02110958_13256.jpg'
    },
    {
      breed: 'puggle',
      image: 'https://images.dog.ceo/breeds/puggle/IMG_095543.jpg'
    },
    {
      breed: 'pyrenees',
      image: 'https://images.dog.ceo/breeds/pyrenees/n02111500_6401.jpg'
    },
    {
      breed: 'redbone',
      image: 'https://images.dog.ceo/breeds/redbone/n02090379_1348.jpg'
    },
    {
      breed: 'retriever',
      image: 'https://images.dog.ceo/breeds/retriever-curly/n02099429_1793.jpg'
    },
    {
      breed: 'ridgeback',
      image: 'https://images.dog.ceo/breeds/ridgeback-rhodesian/n02087394_11139.jpg'
    },
    {
      breed: 'rottweiler',
      image: 'https://images.dog.ceo/breeds/rottweiler/n02106550_5311.jpg'
    },
    {
      breed: 'saluki',
      image: 'https://images.dog.ceo/breeds/saluki/n02091831_5384.jpg'
    },
    {
      breed: 'samoyed',
      image: 'https://images.dog.ceo/breeds/samoyed/n02111889_464.jpg'
    },
    {
      breed: 'schipperke',
      image: 'https://images.dog.ceo/breeds/schipperke/n02104365_3587.jpg'
    },
    {
      breed: 'schnauzer',
      image: 'https://images.dog.ceo/breeds/schnauzer-miniature/n02097047_509.jpg'
    },
    {
      breed: 'setter',
      image: 'https://images.dog.ceo/breeds/setter-irish/n02100877_7493.jpg'
    },
    {
      breed: 'sheepdog',
      image: 'https://images.dog.ceo/breeds/sheepdog-shetland/n02105855_14297.jpg'
    },
    {
      breed: 'shiba',
      image: 'https://images.dog.ceo/breeds/shiba/shiba-11.jpg'
    },
    {
      breed: 'shihtzu',
      image: 'https://images.dog.ceo/breeds/shihtzu/n02086240_3186.jpg'
    },
    {
      breed: 'spaniel',
      image: 'https://images.dog.ceo/breeds/spaniel-blenheim/n02086646_2772.jpg'
    },
    {
      breed: 'springer',
      image: 'https://images.dog.ceo/breeds/springer-english/n02102040_8210.jpg'
    },
    {
      breed: 'stbernard',
      image: 'https://images.dog.ceo/breeds/stbernard/n02109525_1314.jpg'
    },
    {
      breed: 'terrier',
      image: 'https://images.dog.ceo/breeds/terrier-dandie/n02096437_967.jpg'
    },
    {
      breed: 'vizsla',
      image: 'https://images.dog.ceo/breeds/vizsla/n02100583_4473.jpg'
    },
    {
      breed: 'waterdog',
      image: 'https://images.dog.ceo/breeds/waterdog-spanish/20180723_185559.jpg'
    },
    {
      breed: 'weimaraner',
      image: 'https://images.dog.ceo/breeds/weimaraner/n02092339_719.jpg'
    },
    {
      breed: 'whippet',
      image: 'https://images.dog.ceo/breeds/whippet/n02091134_10107.jpg'
    },
    {
      breed: 'wolfhound',
      image: 'https://images.dog.ceo/breeds/wolfhound-irish/n02090721_363.jpg'
    }
  ]
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  