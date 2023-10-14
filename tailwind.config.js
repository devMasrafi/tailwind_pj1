tailwind.config = {
  theme: {
    extend: {
      colors: {
        'primary': '#fff',
        'btn': 'rgba(255, 255, 255, 0.50)',
        'secondary': '#000',
        'pera': '#6C6C6C',
        'common_bg': '#F40404',
        'head_bg': '#282828',
        'footer_bg': '#1F1F1F',
        'overlay_bg': 'rgba(0, 0, 0, 0.60)',
        'about_bg': '#F0F0F0',
      },
      fontFamily: {
        'poppins': "Poppins, sans-serif"
      },
      maxWidth: {
        container: "1140px",
      },
     backgroundImage: {
      'banner': "linear-gradient(rgba(0, 0, 0, 0.60), rgba(0, 0, 0, 0.60)), url('images/banner.jpg')",
      'oil_refiner': "linear-gradient(rgba(0, 0, 0, 0.60), rgba(0, 0, 0, 0.60)), url('images/service1.jpg')",
      'industry_bg': "linear-gradient(rgba(0, 0, 0, 0.60), rgba(0, 0, 0, 0.60)), url('images/service2.png')",
      'supply_bg': "linear-gradient(rgba(0, 0, 0, 0.60), rgba(0, 0, 0, 0.60)), url('images/service3.png')",
      }
    }
  }
}