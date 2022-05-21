import { getComponent } from 'components'
import { IBlockBenefits } from '../interfaces/blocks'

import { Block } from '../enums/blocks'

export default function BlockBenefitBlock() {
  const props = {
    items: [
      {
        id: 'cl3bu9m2a3cd10cmkpxsbki6b',
        heading: 'PROJECTS COMPLETED',
        subheading: '548',
        image: {
          id: 'cl3fxm5ej0f7e0elca91yru6g',
          url: 'https://media.graphassets.com/g09IWNYySZyGI4obIlH7',
        },
      },
      {
        id: 'cl3bua5ba3aka0amhe72g0ils',
        heading: 'WORKING HOURS',
        subheading: '1465',
        image: {
          id: 'cl3fxmqje0fer0bmiajwszdo6',
          url: 'https://media.graphassets.com/grnM444MT7Cdh7t1KTlO',
        },
      },
      {
        id: 'cl3buawbt38z20amnu2wkh096',
        heading: 'POSITIVE FEEDBACKS',
        subheading: '612',
        image: {
          id: 'cl3fxnp690f9g0elclfaqs9c2',
          url: 'https://media.graphassets.com/T8fZcmT1iu1uPvIpcAQU',
        },
      },
      {
        id: 'cl3bubzfu392u0amny5dw3up5',
        heading: 'HAPPY CLIENTS',
        subheading: '735',
        image: {
          id: 'cl3fxo52u0fge0bmiahziuq67',
          url: 'https://media.graphassets.com/szsMgE2sSTG4AMrMDAq2',
        },
      },
    ],
  }

  return getComponent<IBlockBenefits>(Block.BlockBenefit, props)
}
