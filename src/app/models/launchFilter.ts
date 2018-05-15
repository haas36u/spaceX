import {HttpParams} from "@angular/common/http";

export class LaunchFilter {
  /**
   * Use true to show mongo document id's
   */
  id: boolean;
  /**
   * Filter launches by mongo document id
   */
  flight_id: string;
  /**
   * Change result ordering by asc or desc
   */
  order;
  /**
   * Filter by a date range
   */
  start;
  /**
   * Filter by a date range
   */
  final;
  /**
   * Filter by flight number
   */
  flight_number;
  /**
   * Filter by year
   */
  launch_year;
  /**
   * Filter by UTC timestamp
   */
  launch_date_utc;
  /**
   * Filter by local ISO timestamp
   */
  launch_date_local;
  /**
   * Filter by rocket id
   */
  rocket_id;
  /**
   * Filter by rocket name
   */
  rocket_name;
  /**
   * Filter by rocket type
   */
  rocket_type;
  /**
   * Filter by core serial #
   */
  core_serial;
  /**
   * Filter by dragon capsule serial #
   */
  cap_serial;
  /**
   * Filter by core flight number
   */
  core_flight;
  /**
   * Filter by core block number
   */
  block;
  /**
   * Filter by core reusability
   */
  core_reuse;
  /**
   * Filter by Falcon Heavy side core 1 reuse
   */
  side_core1_reuse;
  /**
   * Filter by Falcon Heavy side core 2 reuse
   */
  side_core2_reuse;
  /**
   * Filter by fairing reuse
   */
  fairings_reuse;
  /**
   * Filter by dragon capsule reuse
   */
  capsule_reuse;
  /**
   * Filter by launch site id
   */
  site_id;
  /**
   * Filter by launch site name
   */
  site_name;
  /**
   * Filter by long launch site name
   */
  site_name_long;
  /**
   * Filter by payload id
   */
  payload_id;
  /**
   * Filter by launch customer
   */
  customer;
  /**
   * Filter by payload type
   */
  payload_type;
  /**
   * Filter by payload orbit
   */
  orbit;
  /**
   * Filter by successful launches
   */
  launch_success;
  /**
   * Filter by launches with reused cores
   */
  reused;
  /**
   * Filter by sucessful core landings
   */
  land_success;
  /**
   * Filter by landing method
   */
  landing_type;
  /**
   * Filter by landing vehicle
   */
  landing_vehicle;

  constructor(fields?: {
    id?,
    flight_id?,
    order?,
    start?,
    final?,
    flight_number?,
    launch_year?,
    launch_date_utc?,
    launch_date_local?,
    rocket_id?,
    rocket_name?,
    rocket_type?,
    core_serial?,
    cap_serial?,
    core_flight?,
    block?,
    core_reuse?,
    side_core1_reuse?,
    side_core2_reuse?,
    fairings_reuse?,
    capsule_reuse?,
    site_id?,
    site_name?,
    site_name_long?,
    payload_id?,
    customer?,
    payload_type?,
    orbit?,
    launch_success?,
    reused?,
    land_success?,
    landing_type?,
    landing_vehicle?
  }) {
  this.id = fields.id;
    this.flight_id = fields.flight_id;
    this.order = fields.order;
    this.start = fields.start;
    this.final = fields.final;
    this.flight_number = fields.flight_number;
    this.launch_year = fields.launch_year;
    this.launch_date_utc = fields.launch_date_utc;
    this.launch_date_local = fields.launch_date_local;
    this.rocket_id = fields.rocket_id;
    this.rocket_name = fields.rocket_name;
    this.rocket_type = fields.rocket_type;
    this.core_serial = fields.core_serial;
    this.cap_serial = fields.cap_serial;
    this.core_flight = fields.core_flight;
    this.block = fields.block;
    this.core_reuse = fields.core_reuse;
    this.side_core1_reuse = fields.side_core1_reuse;
    this.side_core2_reuse = fields.side_core2_reuse;
    this.fairings_reuse = fields.fairings_reuse;
    this.capsule_reuse = fields.capsule_reuse;
    this.site_id = fields.site_id;
    this.site_name = fields.site_name;
    this.site_name_long = fields.site_name_long;
    this.payload_id = fields.payload_id;
    this.customer = fields.customer;
    this.payload_type = fields.payload_type;
    this.orbit = fields.orbit;
    this.launch_success = fields.launch_success;
    this.reused = fields.reused;
    this.land_success = fields.land_success;
    this.landing_type = fields.landing_type;
    this.landing_vehicle = fields.landing_vehicle;
  }

  toHttpParams(): HttpParams {
    let params: HttpParams = new HttpParams();
    for(let [key, value] of Object.entries(this)){
      params.set(key, value);
    }

    return params
  }
}
