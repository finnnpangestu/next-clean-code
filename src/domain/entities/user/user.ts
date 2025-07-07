import { Address } from "../address/address";
import { Company } from "../company/company";

export interface User {
  id?: number | null,
  name?: string | null,
  username?: string | null,
  email?: string | null,
  address?: Address | null,
  phone?: string | null,
  website?: string | null,
  company?: Company | null,
}