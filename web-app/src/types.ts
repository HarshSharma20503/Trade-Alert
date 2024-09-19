export interface stock {
  name: string;
  quantity: number;
}

export interface Notification {
  name: string;
  priorityLevel: number;
  url: string;
}

export interface UserInfo {
  name: string;
  companies: stock[];
  notifications: Notification[];
}

export interface Company {
  name: string;
  stockSymbol: string;
}
