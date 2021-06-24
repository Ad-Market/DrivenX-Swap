import { MenuEntry } from '@pancakeswap/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: 'https://drivenx-main.netlify.app/',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    items: [
      {
        label: 'Exchange',
        href: '/swap',
      },
      {
        label: 'Liquidity',
        href: '/pool',
      },
    ],
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: 'https://drivenx-main.netlify.app/farms',
  },
  {
    label: 'Pools',
    icon: 'PoolIcon',
    // href: '/nests',
    href:'https://drivenx-main.netlify.app/pools'
  },
  // {
  //   label: 'Pools',
  //   icon: 'PoolIcon',
  //   href: '/pools',
  // },
  // {
  //   label: 'Lottery',
  //   icon: 'TicketIcon',
  //   href: '/lottery',
  // },
  // {
  //   label: 'NFT',
  //   icon: 'NftIcon',
  //   href: '/nft',
  // },
  {
    label: 'Info',
    icon: 'InfoIcon',
    items: [
      {
        label: 'Liquidity Locked',
        href: 'https://dxsale.app/app/pages/dxlockview?id=0&add=0xad5284Df1Ae5D8c860112e8E02e112A9cAa7d66F&type=lplock&chain=BSC',
      },{
        label: 'BscScan',
        href: 'https://bscscan.com/token/0x0a950ac7f14a4982cee3bf24adb1dad17e0a9026',
      }
    ]
      
  },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: 'GitHub',
        href: 'https://github.com/DRIVENx/DRIVENx',
      },
      {
        label: 'GitBook',
        href: 'https://drivenx.gitbook.io/drivenx/',
      },
      {
        label: 'PooCoin',
        href: 'https://poocoin.app/tokens/0x0a950ac7f14a4982cee3bf24adb1dad17e0a9026',
      },
    ],
  },
  // {
  //   label: 'Partnerships/IFO',
  //   icon: 'GooseIcon',
  //   href: 'https://docs.google.com/forms/d/e/1FAIpQLSe7ycrw8Dq4C5Vjc9WNlRtTxEhFDB1Ny6jlAByZ2Y6qBo7SKg/viewform?usp=sf_link',
  // },
  // {
  //   label: 'Audit by Hacken',
  //   icon: 'AuditIcon',
  //   href: 'https://www.goosedefi.com/files/hackenAudit.pdf',
  // },
  // {
  //   label: 'Audit by CertiK',
  //   icon: 'AuditIcon',
  //   href: 'https://certik.org/projects/goose-finance',
  // },
]

export default config
