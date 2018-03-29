export const menus = [
  {
    index: 0,
    id: 'Home',
    item: '管理首页',
    isActive: false,
    plusActive: 'active',
    minusActive: 'inactive',
    active: false,
    routerLink: '/',
    icon: 'fa-home',
    list: []
  },
  {
    index: 1,
    id: 'Table',
    item: '表格',
    isActive: false,
    active: false,
    plusActive: 'active',
    minusActive: 'inactive',
    icon: 'fa-table',
    list: [
      {
        id: 1,
        item: '表格一',
        routerLink: '/Table/DataTable1',
        icon: 'fa-list-ul',
        isActive: false
      },
      {
        id: 2,
        item: '表格二',
        routerLink: '/Table/DataTable2',
        icon: 'fa-list',
        isActive: false
      }
    ]
  },
  {
    index: 2,
    id: 'Bootstrap',
    item: 'Bootstrap控件',
    isActive: false,
    active: false,
    plusActive: 'active',
    minusActive: 'inactive',
    icon: 'fa-twitter',
    list: [
      {
        id: 1,
        item: '日期',
        routerLink: '/Bootstrap/Calendar',
        icon: 'fa-calendar',
        isActive: false
      },
      {
        id: 2,
        item: '按钮',
        routerLink: '/Bootstrap/Calendar',
        icon: 'fa-list',
        isActive: false
      }
    ]
  }
];

