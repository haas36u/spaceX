/**
 * Interface for Launches filters
 */
export interface LaunchFilter {
  /**
   * Use true to show mongo document id's
   */
  id?: boolean;
  /**
   * Filter launches by mongo document id
   */
  flight_id?: string;
  /**
   * Change result ordering by asc or desc
   */
  order?: Order;
  /**
   * Filter by a date range
   */
  start?: Date;
  /**
   * Filter by a date range
   */
  final?: Date;
  /**
   * Filter by flight number
   */
  flight_number?: number;
  /**
   * Filter by year
   */
  launch_year?: string;
  /**
   * Filter by UTC timestamp
   */
  launch_date_utc?: Date;
  /**
   * Filter by local ISO timestamp
   */
  launch_date_local?: Date;
  /**
   * Filter by rocket id
   */
  rocket_id?;
  /**
   * Filter by rocket name
   */
  rocket_name?;
  /**
   * Filter by rocket type
   */
  rocket_type?;
  /**
   * Filter by core serial #
   */
  core_serial?;
  /**
   * Filter by dragon capsule serial #
   */
  cap_serial?;
  /**
   * Filter by core flight number
   */
  core_flight?;
  /**
   * Filter by core block number
   */
  block?;
  /**
   * Filter by core reusability
   */
  core_reuse?;
  /**
   * Filter by Falcon Heavy side core 1 reuse
   */
  side_core1_reuse?;
  /**
   * Filter by Falcon Heavy side core 2 reuse
   */
  side_core2_reuse?;
  /**
   * Filter by fairing reuse
   */
  fairings_reuse?;
  /**
   * Filter by dragon capsule reuse
   */
  capsule_reuse?;
  /**
   * Filter by launch site id
   */
  site_id?;
  /**
   * Filter by launch site name
   */
  site_name?;
  /**
   * Filter by long launch site name
   */
  site_name_long?;
  /**
   * Filter by payload id
   */
  payload_id?;
  /**
   * Filter by launch customer
   */
  customer?;
  /**
   * Filter by payload type
   */
  payload_type?;
  /**
   * Filter by payload orbit
   */
  orbit?;
  /**
   * Filter by successful launches
   */
  launch_success?;
  /**
   * Filter by launches with reused cores
   */
  reused?;
  /**
   * Filter by sucessful core landings
   */
  land_success?;
  /**
   * Filter by landing method
   */
  landing_type?;
  /**
   * Filter by landing vehicle
   */
  landing_vehicle?;
}

export enum Order {
  asc,
  desc
}
