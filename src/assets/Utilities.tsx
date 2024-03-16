export function TimeSince(dateString: string): string {
    const date = new Date(dateString);
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();

  
    const seconds = Math.floor(diffMs / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const weeks = Math.floor(days / 7);
    const months = Math.floor(days / 30.4375); // Average days in a month
  
    if (seconds < 60) {
      return `${seconds} second${seconds === 1 ? '' : 's'} ago`;
    } else if (minutes < 60) {
      return `${minutes} minute${minutes === 1 ? '' : 's'} ago`;
    } else if (hours < 24) {
      return `${hours} hour${hours === 1 ? '' : 's'} ago`;
    } else if (days < 7) {
      return `${days} day${days === 1 ? '' : 's'} ago`;
    } else if (weeks < 4) {
      return `${weeks} week${weeks === 1 ? '' : 's'} ago`;
    } else if (months < 12) {
      return `${months} month${months === 1 ? '' : 's'} ago`;
    } else {
      const years = Math.floor(months / 12);
      return `${years} year${years === 1 ? '' : 's'} ago`;
    }
  }
