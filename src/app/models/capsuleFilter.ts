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
