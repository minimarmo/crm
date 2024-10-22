export interface ICompany {
  id: string;
  name: string;
  logo: string;
  phone: string;
  email: string;
  website: string;
  industry: string;
  size: string;
  location: string;
  address: string;
  tax_id: string;
  revenue: string;
  source: string;
  owner: string;
  relationship: string;
}
export interface IContact {
  id: string;
  name: string;
  phone: string;
  email: string;
  position: string;
  dept: string;
  company: string;
  source: string;
  last_contracted: string;
  notes: string;
}
export interface ILead {
  id: string;
  name: string;
  contact: string;
  company: string;
  job_title: string;
  source: string;
  status: string;
  interest: string;
  follow_up: string;
  scoring: number;
  created_date: string;
}
export interface IDeal {
  id: string;
  name: string;
  stage: string;
  start_date: string;
  expected_close_date: string;
  value: number;
  customer: string;
  owner: string;
  priority: string;
  desc: string;
  source: string;
  status: string;
  notes: string;
}
export interface ITask {
  id: string;
  title: string;
  desc: string;
  assigned: string;
  related: string;
  due_date: string;
  priority: string;
  status: string;
  created_date: string;
  completed_date: string;
  created_date: string;
  owner: string;
  reminder: string;
  notes: string;
}
export interface IInvoice {
  id: string;
  name: string;
}
export interface IReceipt {
  id: string;
  name: string;
}
export interface IUser {
  id: string;
  name: string;
}
export interface IRole {
  id: string;
  name: string;
}
export interface IIssue {
  id: string;
  name: string;
}
export interface IKnowledge {
  id: string;
  name: string;
}
