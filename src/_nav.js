export default {
  items: [
    {
      name: 'Dashboard',
      url: '/dashboard',
      icon: 'icon-speedometer',
      badge: {
        variant: 'primary',
        text: 'NEW'
      }
    },
   
    {
      title: true,
      name: 'Components',
      class: '',
      wrapper: {
        element: '',
        attributes: {}
      }
    },
  
    
    
    {
      name: 'NewTest',
      url: '/newtest',
      icon: 'icon-pie-chart'
    },
    {
      name: 'API Reference',
      url: '/apiReference',
      icon: 'icon-pie-chart'
    },
    
   
    {
      divider: true
    },
    {
      title: true,
      name: 'Extras'
    },
    {
      name: 'Pages',
      url: '/pages',
      icon: 'icon-star',
      children: [
        {
          name: 'Login',
          url: '/pages/login',
          icon: 'icon-star'
        },
        {
          name: 'Register',
          url: '/pages/register',
          icon: 'icon-star'
        },
      
        {
          name: 'NewPage',
          url: '/pages/newpage',
          icon: 'icon-star'
        }
      ]
    },
    {
      name: 'Disabled',
      url: '/dashboard',
      icon: 'icon-ban',
      badge: {
        variant: 'secondary',
        text: 'NEW'
      },
      attributes: { disabled: true },
    },
    
  ]
}
