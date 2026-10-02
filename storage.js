const KEY="nexus-volunteers";
export function saveVolunteer(data){const list=JSON.parse(localStorage.getItem(KEY)||"[]");list.push({...data,createdAt:new Date().toISOString()});localStorage.setItem(KEY,JSON.stringify(list))}
export function getVolunteers(){return JSON.parse(localStorage.getItem(KEY)||"[]")}