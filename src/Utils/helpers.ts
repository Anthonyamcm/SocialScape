export function formatTodayDate() {
    const today = new Date();
    
    // Adjust the locale 'en-UK' as needed
    const formattedDate = today.toLocaleDateString('en-GB',  { weekday: 'short', day: '2-digit', month: 'short' });
    
    // Replace the default '/' with ', ' for the desired format
    return formattedDate.replace(/\//g, ', ');
  }

export function getTimeOfDay() {
    const hour = new Date().getHours();
  
    if (hour < 12) {
      return 'Morning';
    } else if (hour >= 12 && hour < 18) {
      return 'Afternoon';
    } else {
      return 'Evening';
    }
  }