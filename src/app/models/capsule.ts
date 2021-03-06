export interface HeatShield {
  material: string;
  size_meters: number;
  temp_degrees: number;
  dev_partner: string;
}

export interface Thrust {
  kN: number;
  lbf: number;
}

export interface Thruster {
  type: string;
  amount: number;
  pods: number;
  fuel_1: string;
  fuel_2: string;
  thrust: Thrust;
}

export interface LaunchPayloadMass {
  kg: number;
  lb: number;
}

export interface LaunchPayloadVol {
  cubic_meters: number;
  cubic_feet: number;
}

export interface ReturnPayloadMass {
  kg: number;
  lb: number;
}

export interface ReturnPayloadVol {
  cubic_meters: number;
  cubic_feet: number;
}

export interface PayloadVolume {
  cubic_meters: number;
  cubic_feet: number;
}

export interface PressurizedCapsule {
  payload_volume: PayloadVolume;
}

export interface TrunkVolume {
  cubic_meters: number;
  cubic_feet: number;
}

export interface Cargo {
  solar_array: number;
  unpressurized_cargo: boolean;
}

export interface Trunk {
  trunk_volume: TrunkVolume;
  cargo: Cargo;
}

export interface HeightWTrunk {
  meters: number;
  feet: number;
}

export interface Diameter {
  meters: number;
  feet: number;
}

export interface Capsule {
  id: string;
  name: string;
  type: string;
  active: boolean;
  crew_capacity: number;
  sidewall_angle_deg: number;
  orbit_duration_yr: number;
  heat_shield: HeatShield;
  thrusters: Thruster[];
  launch_payload_mass: LaunchPayloadMass;
  launch_payload_vol: LaunchPayloadVol;
  return_payload_mass: ReturnPayloadMass;
  return_payload_vol: ReturnPayloadVol;
  pressurized_capsule: PressurizedCapsule;
  trunk: Trunk;
  height_w_trunk: HeightWTrunk;
  diameter: Diameter;
}

export interface CapsuleDetails {
  capsule_serial: string;
  capsule_id: string;
  status: string;
  original_launch: string;
  missions: string[];
  landings: number;
  type: string;
  details: string;
}

export interface CapsuleFilter {
  /**
   * Filter by capsule serial #
   */
  capsule_serial?: string;
  /**
   * Filter by capsule id
   */
  capsule_id?: string;
  /**
   * Filter by capsule status
   */
  status?: CapsuleStatus;
  /**
   * Filter by original launch date
   */
  original_launch?: Date;
  /**
   * Filter by flight missions
   */
  missions?: string[];
  /**
   * Filter by # of landings
   */
  landings?: number;
  /**
   * Filter by type of dragon capusle
   */
  type?: string;
}

export enum CapsuleStatus {
  ACTIVE = 'active',
  RETIRED = 'retired',
  UNKNOWN = 'unknown',
  DESTROYED = 'destoyed'
}
