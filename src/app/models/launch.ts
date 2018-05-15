import {Rocket} from "./rocket";


export interface Core {
    core_serial: string;
    flight: number;
    block: number;
    reused: boolean;
    land_success: boolean;
    landing_type: string;
    landing_vehicle: string;
}

export interface Telemetry {
    flight_club: string;
}

export interface Reuse {
    core: boolean;
    side_core1: boolean;
    side_core2: boolean;
    fairings: boolean;
    capsule: boolean;
}

export interface LaunchSite {
    site_id: string;
    site_name: string;
    site_name_long: string;
}

export interface Links {
    mission_patch: string;
    mission_patch_small: string;
    reddit_campaign: string;
    reddit_launch: string;
    reddit_recovery?: any;
    reddit_media: string;
    presskit: string;
    article_link: string;
    video_link: string;
}

export interface Launch {
    flight_number: number;
    mission_name: string;
    launch_year: string;
    launch_date_unix: number;
    launch_date_utc: Date;
    launch_date_local: Date;
    rocket: Rocket;
    telemetry: Telemetry;
    reuse: Reuse;
    launch_site: LaunchSite;
    launch_success: boolean;
    links: Links;
    details: string;
}
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
  asc = 'asc',
  desc = 'desc'
}
