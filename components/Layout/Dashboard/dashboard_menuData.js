const dashMenuData = [
    {
      id: 1,
      has_items: true,
      title: 'Admin tools',
      sub_menus: [
        { link: '/', title: 'Dashboard' },
        { link: '/', title: 'Create New NFT' },
        { link: '/', title: 'My Collections' },
        { link: '/', title: 'My Bidding' },
        { link: '/', title: 'Live Auctions' },
        { link: '/', title: 'Discover NFTs' },
        { link: '/', title: 'My Profile' },
        { link: '/', title: 'Social Connections' },
        {
          id: 2,
          has_items: true,
          title: 'Wallet',
          sub_menus: [
            { link: '/', title: 'Transactions' },
            { link: '/', title: 'My Wallet' },
            { link: '/', title: 'Withdraw Funds' },
          ],
        },
      ],
    },
    {
      id: 2,
      has_items: true,
      title: 'INSIGHTS',
      sub_menus: [
        { link: '/', title: 'Notification' },
        { link: '/', title: 'Settings' },
        { link: '/', title: 'Logout' },
      ],
    },
  ];
  
  export default dashMenuData;
  