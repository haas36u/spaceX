export interface Core {
  core_serial: string;
  block: number;
  status: string;
  original_launch: Date;
  missions: string[];
  rtls_attempt: boolean;
  rtls_landings: number;
  asds_attempt: boolean;
  asds_landings: number;
  water_landing: boolean;
  details: string;
}

export interface CoreFilter {
  /**
   * Filter by core serial #
   */
  core_serial?: string;
  /**
   * Filter by core block number
   */
  block?: number;
  /**
   * Filter by flight status
   */
  status?;
  /**
   * Filter by original launch date
   */
  original_launch?;
  /**
   * Filter by flight missions
   */
  missions?;
  /**
   * Filter by at least 1 rtls attempt
   */
  rtls_attempt?;
  /**
   * Filter by total number of landings
   */
  rtls_landings?;
  /**
   * Filter by at least 1 asds attempt
   */
  asds_attempt?;
  /**
   * Filter by total number of landings
   */
  asds_landings?;
  /**
   * Filter by at least 1 water landing
   */
  water_landing?;
}
