import { Geo } from "../geolocation/geo";

export interface Address {
  street?: string | null,
  suite?: string | null,
  city?: string | null,
  zipcode?: string | null,
  geo?: Geo | null,
}