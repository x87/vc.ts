// Generated from main/debug.sc

import { $ } from "../vars.mts";

async function delete_gates() {

}



async function mission_start_debug() {


  await asyncWait(0);


  debug_game_timer = Clock.GetGameTimer();


  if ($.player1.isPlaying()) {


    ///	EXPLODE PLAYERS HEAD //////////////////////////////////////////////
    //	IF IS_BUTTON_PRESSED PAD2 CROSS
    //	AND IS_BUTTON_PRESSED PAD2 SQUARE
    //		IF NOT IS_PLAYER_IN_ANY_CAR player1
    //			EXPLODE_PLAYER_HEAD player1
    //		ELSE
    //			STORE_CAR_PLAYER_IS_IN_NO_SAVE player1 car_colour2
    //			IF NOT IS_CAR_DEAD car_colour2
    //				EXPLODE_CAR car_colour2
    //			ENDIF
    //		ENDIF
    //		GOTO mission_start_debug
    //	ENDIF
    ///////////////////////////////////////////////////////////////////////

    /*
    //Chris' Super Code to allow you to create a race in a matter of minutes/////

    VAR_FLOAT x2 y2 z2 distance
    IF IS_BUTTON_PRESSED PAD1 CIRCLE
    IF button_pressed = 1
    button_pressed = 2
    PRINT_NOW TEXTXYZ 800 1 // Writing coordinates to file...
    ENDIF
    ELSE
    IF button_pressed = 0
    button_pressed = 1
    ENDIF
    ENDIF

    IF button_pressed = 2
    IF IS_PLAYER_IN_ANY_CAR PLAYER1
    GET_PLAYER_COORDINATES player1 X Y Z
    GET_DISTANCE_BETWEEN_COORDS_3D X Y Z x2 y2 z2 distance
    IF distance > 250.0
    PRINT_NOW TEXTXYZ 800 1 // Writing coordinates to file...
    SAVE_NEWLINE_TO_DEBUG_FILE
    SAVE_FLOAT_TO_DEBUG_FILE x
    SAVE_NEWLINE_TO_DEBUG_FILE
    SAVE_FLOAT_TO_DEBUG_FILE y
    SAVE_NEWLINE_TO_DEBUG_FILE
    SAVE_FLOAT_TO_DEBUG_FILE z
    SAVE_NEWLINE_TO_DEBUG_FILE
    x2 = x
    y2 = y
    z2 = z
    ENDIF
    ENDIF
    ENDIF
    */

    ///	FORCE WEATHER /////////////////////////////////////////////////////
    if (cheat_mode_on == 0) {
      if (Pad.IsButtonPressed(1 /* PAD2 */, 4 /* LEFTSHOULDER1 */)) {
        weather_crap++;
        if (weather_crap > 6) {
          weather_crap = 1;
        }
        if (weather_crap == 1) {
          Weather.ForceNow(0 /* WEATHER_SUNNY */);
          Text.PrintNow("WEATHE1", 1000, 1); //CHEAT MODE ON
          await asyncWait(300);
        }
        if (weather_crap == 2) {
          Weather.ForceNow(WEATHER_EXTRA_SUNNY);
          Text.PrintNow("WEATHE2", 1000, 1); //CHEAT MODE ON
          await asyncWait(300);
        }
        if (weather_crap == 3) {
          Weather.ForceNow(1 /* WEATHER_CLOUDY */);
          Text.PrintNow("WEATHE3", 1000, 1); //CHEAT MODE ON
          await asyncWait(300);
        }
        if (weather_crap == 4) {
          Weather.ForceNow(2 /* WEATHER_RAINY */);
          Text.PrintNow("WEATHE4", 1000, 1); //CHEAT MODE ON
          await asyncWait(300);
        }
        if (weather_crap == 5) {
          Weather.ForceNow(3 /* WEATHER_FOGGY */);
          Text.PrintNow("WEATHE5", 1000, 1); //CHEAT MODE ON
          await asyncWait(300);
        }
        if (weather_crap == 6) {
          Weather.Release();
          Text.PrintNow("WEATHE6", 1000, 1); //CHEAT MODE ON
          await asyncWait(300);
        }
        if (!($.player1.isPlaying())) {
          // SCM GOTO → mission_start_debug (not lowered; manual jump required)
          throw new Error("unresolved GOTO mission_start_debug"); // fallback: would break linear control flow
        }
      }

      /// CHANGE PLAYERS CAR COLOURS //////////////////////////////////////////

      if (Pad.IsButtonPressed(1 /* PAD2 */, 4 /* LEFTSHOULDER1 */)) {
        if (carcolour_flag1 == 1) {
          if ($.player1.isInAnyCar()) {
            carcolour_counter1++;
            if (carcolour_counter1 > 94) {
              carcolour_counter1 = 0;
            }
            carcolour_timer1 = debug_game_timer + 250;
            carcolour_flag1 = 2;
          }
        }
      }
      if (Pad.IsButtonPressed(1 /* PAD2 */, 5 /* LEFTSHOULDER2 */)) {
        if (carcolour_flag2 == 1) {
          if ($.player1.isInAnyCar()) {
            carcolour_counter2++;
            if (carcolour_counter2 > 94) {
              carcolour_counter2 = 0;
            }
            carcolour_timer2 = debug_game_timer + 250;
            carcolour_flag2 = 2;
          }
        }
      }
      if (carcolour_flag1 == 2 || carcolour_flag2 == 2) {
        players_debug_car = $.player1.storeCarIsInNoSave();
        players_debug_car.changeColor(carcolour_counter1, carcolour_counter2);
        Text.PrintWith2NumbersNow("CO_ONE", carcolour_counter1, carcolour_counter2, 500, 1);
        carcolour_flag1 = 0;
        carcolour_flag2 = 0;
      }
      if (!(Pad.IsButtonPressed(1 /* PAD2 */, 4 /* LEFTSHOULDER1 */)) || carcolour_timer1 < debug_game_timer) {
        if (carcolour_flag1 == 0) {
          carcolour_flag1 = 1;
        }
      }
      if (!(Pad.IsButtonPressed(1 /* PAD2 */, 5 /* LEFTSHOULDER2 */)) || carcolour_timer2 < debug_game_timer) {
        if (carcolour_flag2 == 0) {
          carcolour_flag2 = 1;
        }
      }


    }
    ///////////////////////////////////////////////////////////////////////


    ///	TURN CHEAT MODE ON/OFF ////////////////////////////////////////////
    if (cheat_mode_on_flag == 0) {
      if (Pad.IsButtonPressed(1 /* PAD2 */, 15 /* TRIANGLE */)) {
        if (!(Pad.IsButtonPressed(1 /* PAD2 */, 16 /* CROSS */)) || !(Pad.IsButtonPressed(1 /* PAD2 */, 12 /* CIRCLE */)) || !(Pad.IsButtonPressed(1 /* PAD2 */, 4 /* LEFTSHOULDER1 */)) || !(Pad.IsButtonPressed(1 /* PAD2 */, 5 /* LEFTSHOULDER2 */)) || !(Pad.IsButtonPressed(1 /* PAD2 */, 12 /* START */)) || !(Pad.IsButtonPressed(1 /* PAD2 */, 13 /* SELECT */))) {
          Text.PrintNow("CHEATON", 2000, 1); //CHEAT MODE ON
          Debugger.Enable();
          cheat_mode_on = 1;
          cheat_mode_on_flag = 1;
        }
      }
    }
    if (!(Pad.IsButtonPressed(1 /* PAD2 */, 15 /* TRIANGLE */))) {
      if (cheat_mode_on_flag == 1) {
        cheat_mode_on_flag = 2;
      }
      if (cheat_mode_on_flag == 3) {
        cheat_mode_on_flag = 0;
      }
    }
    if (cheat_mode_on_flag == 2) {
      if (Pad.IsButtonPressed(1 /* PAD2 */, 15 /* TRIANGLE */)) {
        Text.PrintNow("CHEATOF", 2000, 1); //CHEAT MODE OFF
        Debugger.Disable();
        cheat_mode_on = 0;
        cheat_mode_on_flag = 3;
      }
    }

    /// CREATE A PICKUP //////////////////////////////////////////

    if (Pad.IsButtonPressed(1 /* PAD2 */, 9 /* DPADDOWN */) && flag_create_pickup == 0 && button_press_flag_pickup == 0) {
      [x_float_m, y_float_m, z_float_m] = $.player1.getCoordinates();
      player_heading_debug = $.player1.getHeading();
      if (player_heading_debug < 45.0 && player_heading_debug > 0.0) {
        y_float_m += 5.0;
        debug_car_heading = 90.0;
      }
      if (player_heading_debug < 360.0 && player_heading_debug > 315.0) {
        y_float_m += 5.0;
        debug_car_heading = 90.0;
      }
      if (player_heading_debug < 135.0 && player_heading_debug > 45.0) {
        x_float_m -= 5.0;
        debug_car_heading = 180.0;
      }
      if (player_heading_debug < 225.0 && player_heading_debug > 135.0) {
        y_float_m -= 5.0;
        debug_car_heading = 270.0;
      }
      if (player_heading_debug < 315.0 && player_heading_debug > 225.0) {
        x_float_m += 5.0;
        debug_car_heading = 0.0;
      }
      z_float_m = z_float_m + 1.0;
      z_float_m = World.GetGroundZFor3DCoord(x_float_m, y_float_m, z_float_m);
      if (!($.player1.isPlaying())) {
        // SCM GOTO → mission_start_debug (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_start_debug"); // fallback: would break linear control flow
      }
      // SCM label next_pickup
      await asyncWait(0);
      ++counter_create_pickup;
      if (counter_create_pickup > camera) {
        counter_create_pickup = brassknuckle;
      }
      if (counter_create_pickup == missile) {
        counter_create_pickup = colt45;
      }
      flag_create_pickup = 1;
      button_press_flag_pickup = 1;
      if (!(Streaming.IsModelAvailable(counter_create_pickup))) {
        // SCM GOTO → next_pickup (not lowered; manual jump required)
        throw new Error("unresolved GOTO next_pickup"); // fallback: would break linear control flow
      }
      Streaming.RequestModel(counter_create_pickup);
      Text.PrintNow("LOADCAR", 250, 1); //"Loading vehicle, press pad2 leftshoulder1 to cancel"
      Streaming.LoadAllModelsNow();
      while (!(Streaming.HasModelLoaded(counter_create_pickup))) {
        await asyncWait(0);
        Text.PrintNow("LOADCAR", 80, 1); //"Loading vehicle, press pad2 leftshoulder1 to cancel"
        if (Pad.IsButtonPressed(1 /* PAD2 */, 4 /* LEFTSHOULDER1 */)) {
          // SCM GOTO → next_pickup (not lowered; manual jump required)
          throw new Error("unresolved GOTO next_pickup"); // fallback: would break linear control flow
        }


      }
      z_float_m = z_float_m + 0.8;
      magic_pickup = Pickup.CreateWithAmmo(counter_create_pickup, 3 /* PICKUP_ONCE */, 2000, x_float_m, y_float_m, z_float_m);
      Text.ClearThisBigPrint("NUMBER");
      Text.PrintWithNumberBig("NUMBER", counter_create_pickup, 500, 4);
      //SET_CAR_HEADING	magic_pickup debug_car_heading

      //LOCK_CAR_DOORS magic_pickup CARLOCK_UNLOCKED

      Streaming.MarkModelAsNoLongerNeeded(counter_create_pickup);
      //MARK_CAR_AS_NO_LONGER_NEEDED magic_pickup


    }
    if (!(Pad.IsButtonPressed(1 /* PAD2 */, 9 /* DPADDOWN */)) && button_press_flag_pickup == 1) {
      button_press_flag_pickup = 0;
    }


    if (Pad.IsButtonPressed(1 /* PAD2 */, 9 /* DPADDOWN */) && flag_create_pickup == 1 && button_press_flag_pickup == 0) {
      magic_pickup.remove();
      flag_create_pickup = 0;
      initial_pickup_selected = 0;
      button_press_flag_pickup = 1;
    }



    ///////////////////////////////////////////////////////////////////////

    if (cheat_mode_on == 1 && cheat_mode_on_flag == 2) {

      ///	PLAYER INVULNERABILITY (SOMETIMES) ////////////////////////////////
      //		IF invulnerability_on = 0
      //			IF IS_BUTTON_PRESSED PAD2 START
      //				DO_FADE 100 FADE_IN
      //				invulnerability_on = 1
      //			ENDIF
      //		ENDIF
      //
      //		IF invulnerability_on = 2
      //			IF IS_BUTTON_PRESSED PAD2 START
      //				DO_FADE 100 FADE_IN
      //				invulnerability_on = 3
      //			ENDIF
      //		ENDIF
      //
      //		IF NOT IS_BUTTON_PRESSED PAD2 START
      //			IF invulnerability_on = 1
      //				invulnerability_on = 2
      //			ENDIF
      //			IF invulnerability_on = 3
      //				invulnerability_on = 0
      //			ENDIF
      //		ENDIF
      ///////////////////////////////////////////////////////////////////////

      ///////////////////////////////////////////////////////////////////////
      ///////////////////////////////////////////////////////////////////////
      ///////// WRITE 3D LOCATE COORDINATES TO TEMP_DEBUG.TXT ///////////////
      ///////////////////////////////////////////////////////////////////////
      // TURN CHEAT MODE ON AND PRESS PAD1 L1 & L2 AND PAD2 CROSS TO START //
      // USE THE PAD1 RIGHT ANALOGUE STICK AND PAD1 L1 & L2 TO POSITION THE//
      // LOCATE BOX. R1, R2, TRIANGLE, CROSS, SQUARE & CIRCLE TO RESIZE IT //
      ///////////////////////////////////////////////////////////////////////
      ///////////////////////////////////////////////////////////////////////
      if ($.player1.isPlaying()) {
        if (is_stunt_jump_debug == 0) {
          if (Pad.IsButtonPressed(0 /* PAD1 */, 4 /* LEFTSHOULDER1 */) && Pad.IsButtonPressed(0 /* PAD1 */, 5 /* LEFTSHOULDER2 */) && Pad.IsButtonPressed(1 /* PAD2 */, 16 /* CROSS */)) {
            is_stunt_jump_debug = 1;
            [stunt_jump_debug_X, stunt_jump_debug_Y, stunt_jump_debug_Z] = $.player1.getCoordinates();
            $.player1.setControl(false /* OFF */);
            corona_x = 10.0;
            corona_y = 10.0;
            corona_z = 10.0;
          }
        }
        else {
          const _res178 = Pad.GetPositionOfAnalogueSticks(0 /* PAD1 */);
$.lstickx = _res178.leftStickX;
$.lsticky = _res178.leftStickY;
$.rstickx = _res178.rightStickX;
$.rsticky = _res178.rightStickY;
          RStickX_F = $.rstickx;
          RStickY_F = $.rsticky;
          RStickX_F /= 100.0;
          RStickY_F /= 100.0;
          RStickY_F *= -1.0;
          stunt_jump_debug_X += RStickX_F;
          stunt_jump_debug_Y += RStickY_F;
          if (Pad.IsButtonPressed(0 /* PAD1 */, 4 /* LEFTSHOULDER1 */)) {
            stunt_jump_debug_Z += 0.2;
          }
          else {
            if (Pad.IsButtonPressed(0 /* PAD1 */, 5 /* LEFTSHOULDER2 */)) {
              stunt_jump_debug_Z -= 0.2;
            }
          }
          if (Pad.IsButtonPressed(0 /* PAD1 */, 12 /* CIRCLE */)) {
            corona_x += 0.2;
          }
          else {
            if (Pad.IsButtonPressed(0 /* PAD1 */, 14 /* SQUARE */)) {
              corona_x -= 0.2;
            }
          }
          if (Pad.IsButtonPressed(0 /* PAD1 */, 15 /* TRIANGLE */)) {
            corona_y += 0.2;
          }
          else {
            if (Pad.IsButtonPressed(0 /* PAD1 */, 16 /* CROSS */)) {
              corona_y -= 0.2;
            }
          }
          if (Pad.IsButtonPressed(0 /* PAD1 */, 15 /* TRIANGLE */)) {
            corona_y += 0.2;
          }
          else {
            if (Pad.IsButtonPressed(0 /* PAD1 */, 16 /* CROSS */)) {
              corona_y -= 0.2;
            }
          }
          if (Pad.IsButtonPressed(0 /* PAD1 */, 6 /* RIGHTSHOULDER1 */)) {
            corona_z += 0.2;
          }
          else {
            if (Pad.IsButtonPressed(0 /* PAD1 */, 7 /* RIGHTSHOULDER2 */)) {
              corona_z -= 0.2;
            }
          }
          if ($.player1.locateAnyMeans3D(stunt_jump_debug_X, stunt_jump_debug_Y, stunt_jump_debug_Z, corona_x, corona_y, corona_z, false)) {
          }
          if (Pad.IsButtonPressed(0 /* PAD1 */, 19 /* RIGHTSHOCK */)) {
            if (is_rightshock_pressed == 0) {
              // unsupported SAVE_NEWLINE_TO_DEBUG_FILE
              // unsupported SAVE_FLOAT_TO_DEBUG_FILE
              // unsupported SAVE_NEWLINE_TO_DEBUG_FILE
              // unsupported SAVE_FLOAT_TO_DEBUG_FILE
              // unsupported SAVE_NEWLINE_TO_DEBUG_FILE
              // unsupported SAVE_FLOAT_TO_DEBUG_FILE
              // unsupported SAVE_NEWLINE_TO_DEBUG_FILE
              // unsupported SAVE_FLOAT_TO_DEBUG_FILE
              // unsupported SAVE_FLOAT_TO_DEBUG_FILE
              // unsupported SAVE_FLOAT_TO_DEBUG_FILE
              // unsupported SAVE_NEWLINE_TO_DEBUG_FILE
              Text.PrintNow("TEXTXYZ", 800, 1); // Writing coordinates to file...
              is_rightshock_pressed = 1;
            }
          }
          else {
            if (is_rightshock_pressed == 1) {
              is_rightshock_pressed = 0;
            }
          }
          if (Pad.IsButtonPressed(0 /* PAD1 */, 4 /* LEFTSHOULDER1 */) && Pad.IsButtonPressed(0 /* PAD1 */, 5 /* LEFTSHOULDER2 */) && Pad.IsButtonPressed(1 /* PAD2 */, 16 /* CROSS */)) {
            $.player1.setControl(true /* ON */);
            is_stunt_jump_debug = 0;
          }
        }
      }
      ///////////////////////////////////////////////////////////////////////
      ///////////////////////////////////////////////////////////////////////
      ///////////////////////////////////////////////////////////////////////


      /// TURN PEDS AND CARS ON AND OFF /////////////////////////////////////
      if (Pad.IsButtonPressed(1 /* PAD2 */, 13 /* SELECT */) && repeat_butt_press == 0 && no_cars == 0) {
        World.SetCarDensityMultiplier(0.0);
        World.SetPedDensityMultiplier(0.0);
        Text.PrintNow("CARSOFF", 2000, 1);
        no_cars = 1;
        repeat_butt_press = 1;
      }
      if (Pad.IsButtonPressed(1 /* PAD2 */, 13 /* SELECT */) && repeat_butt_press == 0 && no_cars == 1) {
        World.SetCarDensityMultiplier(1.0);
        World.SetPedDensityMultiplier(1.0);
        Text.PrintNow("CARS_ON", 2000, 1);
        no_cars = 0;
        repeat_butt_press = 1;
      }
      if (!(Pad.IsButtonPressed(1 /* PAD2 */, 13 /* SELECT */))) {
        if (repeat_butt_press == 1) {
          repeat_butt_press = 0;
        }
      }
      ///////////////////////////////////////////////////////////////////////

      /// TEST FOR TEXT PRINTS SO THE ARTISTS CAN CHECK COLOURS ETC /////////
      if (Pad.IsButtonPressed(1 /* PAD2 */, 13 /* SELECT */) && Pad.IsButtonPressed(1 /* PAD2 */, 16 /* CROSS */)) {
        if (print_stuff_button == 1) {
          print_stuff_counter++;
          if (print_stuff_counter > 6) {
            print_stuff_counter = 1;
          }
          if (print_stuff_counter == 1) {
            Hud.ClearTimer(onscreen_4);
            Hud.ClearCounter(onscreen_1);
            Hud.ClearCounter(onscreen_2);
            Hud.ClearCounter(onscreen_3);
            Hud.DisplayNthCounterWithString(onscreen_1, 1 /* COUNTER_DISPLAY_BAR */, 1, "BUSTED");
            Hud.DisplayNthCounterWithString(onscreen_2, 0 /* COUNTER_DISPLAY_NUMBER */, 2, "BUSTED");
            Hud.DisplayNthCounterWithString(onscreen_3, 0 /* COUNTER_DISPLAY_NUMBER */, 3, "BUSTED");
            Hud.DisplayTimerWithString(onscreen_4, TIMER_UP, "BUSTED");
            Text.PrintWithNumberBig("M_PASS", print_stuff_counter, 2000, 1);
          }
          if (print_stuff_counter == 2) {
            Hud.ClearTimer(onscreen_4);
            Hud.ClearCounter(onscreen_1);
            Hud.ClearCounter(onscreen_2);
            Hud.ClearCounter(onscreen_3);
            Hud.DisplayNthCounterWithString(onscreen_1, 1 /* COUNTER_DISPLAY_BAR */, 1, "BUSTED");
            Hud.DisplayNthCounterWithString(onscreen_2, 0 /* COUNTER_DISPLAY_NUMBER */, 2, "BUSTED");
            Hud.DisplayNthCounterWithString(onscreen_3, 0 /* COUNTER_DISPLAY_NUMBER */, 3, "BUSTED");
            Hud.DisplayTimerWithString(onscreen_4, TIMER_UP, "BUSTED");
            Text.PrintWithNumberBig("M_PASS", print_stuff_counter, 2000, 2);
          }
          if (print_stuff_counter == 3) {
            Hud.ClearTimer(onscreen_4);
            Hud.ClearCounter(onscreen_1);
            Hud.ClearCounter(onscreen_2);
            Hud.ClearCounter(onscreen_3);
            Hud.DisplayNthCounterWithString(onscreen_1, 1 /* COUNTER_DISPLAY_BAR */, 1, "BUSTED");
            Hud.DisplayNthCounterWithString(onscreen_2, 0 /* COUNTER_DISPLAY_NUMBER */, 2, "BUSTED");
            Hud.DisplayNthCounterWithString(onscreen_3, 0 /* COUNTER_DISPLAY_NUMBER */, 3, "BUSTED");
            Hud.DisplayTimerWithString(onscreen_4, TIMER_UP, "BUSTED");
            Text.PrintWithNumberBig("M_PASS", print_stuff_counter, 2000, 3);
          }
          if (print_stuff_counter == 4) {
            Hud.ClearTimer(onscreen_4);
            Hud.ClearCounter(onscreen_1);
            Hud.ClearCounter(onscreen_2);
            Hud.ClearCounter(onscreen_3);
            Hud.DisplayNthCounterWithString(onscreen_1, 1 /* COUNTER_DISPLAY_BAR */, 1, "BUSTED");
            Hud.DisplayNthCounterWithString(onscreen_2, 0 /* COUNTER_DISPLAY_NUMBER */, 2, "BUSTED");
            Hud.DisplayNthCounterWithString(onscreen_3, 0 /* COUNTER_DISPLAY_NUMBER */, 3, "BUSTED");
            Hud.DisplayTimerWithString(onscreen_4, TIMER_UP, "BUSTED");
            Text.PrintWithNumberBig("M_PASS", print_stuff_counter, 2000, 4);
          }
          if (print_stuff_counter == 5) {
            Hud.ClearTimer(onscreen_4);
            Hud.ClearCounter(onscreen_1);
            Hud.ClearCounter(onscreen_2);
            Hud.ClearCounter(onscreen_3);
            Hud.DisplayNthCounterWithString(onscreen_1, 1 /* COUNTER_DISPLAY_BAR */, 1, "BUSTED");
            Hud.DisplayNthCounterWithString(onscreen_2, 0 /* COUNTER_DISPLAY_NUMBER */, 2, "BUSTED");
            Hud.DisplayNthCounterWithString(onscreen_3, 0 /* COUNTER_DISPLAY_NUMBER */, 3, "BUSTED");
            Hud.DisplayTimerWithString(onscreen_4, TIMER_UP, "BUSTED");
            Text.PrintWithNumberBig("M_PASS", print_stuff_counter, 2000, 5);
          }
          if (print_stuff_counter == 6) {
            Hud.ClearTimer(onscreen_4);
            Hud.ClearCounter(onscreen_1);
            Hud.ClearCounter(onscreen_2);
            Hud.ClearCounter(onscreen_3);
            Hud.DisplayNthCounterWithString(onscreen_1, 1 /* COUNTER_DISPLAY_BAR */, 1, "BUSTED");
            Hud.DisplayNthCounterWithString(onscreen_2, 0 /* COUNTER_DISPLAY_NUMBER */, 2, "BUSTED");
            Hud.DisplayNthCounterWithString(onscreen_3, 0 /* COUNTER_DISPLAY_NUMBER */, 3, "BUSTED");
            Hud.DisplayTimerWithString(onscreen_4, TIMER_UP, "BUSTED");
            Text.PrintWithNumberBig("M_PASS", print_stuff_counter, 2000, 6);
          }
        }
        print_stuff_button = 0;
      }
      else {
        if (print_stuff_button == 0) {
          print_stuff_button = 1;
        }
      }
      ///////////////////////////////////////////////////////////////////////



      /// WRITE PLAYER COORDS TO TEMP_DEBUG.TXT /////////////////////////////
      if (Pad.IsButtonPressed(1 /* PAD2 */, 4 /* LEFTSHOULDER1 */) && text_button_pressed == 0) {
        [text_x, text_y, text_z] = $.player1.getCoordinates();
        //			IF NOT IS_PLAYER_IN_ANY_CAR player1
        text_z = World.GetGroundZFor3DCoord(text_x, text_y, text_z);
        //			ENDIF
        text_h = $.player1.getHeading();
        // unsupported SAVE_FLOAT_TO_DEBUG_FILE
        // unsupported SAVE_FLOAT_TO_DEBUG_FILE
        // unsupported SAVE_FLOAT_TO_DEBUG_FILE
        // unsupported SAVE_FLOAT_TO_DEBUG_FILE
        // unsupported SAVE_NEWLINE_TO_DEBUG_FILE
        Text.PrintNow("TEXTXYZ", 800, 1); // Writing coordinates to file...
        text_button_pressed = 1;
      }
      if (!(Pad.IsButtonPressed(1 /* PAD2 */, 4 /* LEFTSHOULDER1 */)) && text_button_pressed == 1) {
        text_button_pressed = 0;
      }
      ///////////////////////////////////////////////////////////////////////


      ///	WRITE DEBUG CAMERA COORDS TO TEMP_DEBUG.TXT ///////////////////////
      if (Pad.IsButtonPressed(1 /* PAD2 */, 5 /* LEFTSHOULDER2 */) && repeat_button_press == 0) {
        Text.PrintNow("TEXTXYZ", 800, 1); // Writing coordinates to file...
        [text_x, text_y, text_z] = Camera.GetDebugCoordinates();
        // unsupported SAVE_FLOAT_TO_DEBUG_FILE
        // unsupported SAVE_FLOAT_TO_DEBUG_FILE
        // unsupported SAVE_FLOAT_TO_DEBUG_FILE
        [text_x, text_y, text_z] = Camera.GetDebugPointAt();
        // unsupported SAVE_FLOAT_TO_DEBUG_FILE
        // unsupported SAVE_FLOAT_TO_DEBUG_FILE
        // unsupported SAVE_FLOAT_TO_DEBUG_FILE
        // unsupported SAVE_NEWLINE_TO_DEBUG_FILE
        repeat_button_press = 1;
      }
      if (!(Pad.IsButtonPressed(1 /* PAD2 */, 5 /* LEFTSHOULDER2 */))) {
        if (repeat_button_press == 1) {
          repeat_button_press = 0;
        }
      }
      ///////////////////////////////////////////////////////////////////////


      ///	WRITE PLAYER COORDS RELATIVE TO THE CLOSET CAR TO TEMP_DEBUG.TXT //
      //		IF IS_BUTTON_PRESSED PAD2 LEFTSHOULDER1
      //		AND IS_BUTTON_PRESSED PAD2 LEFTSHOULDER2
      //			IF relative_button_press = 0
      //				PRINT_NOW TEXTXYZ 800 1 // Writing coordinates to file...
      //				GET_PLAYER_COORDINATES player1 player_x player_y player_z
      //				text_x = player_x - 5.0
      //				text_y = player_y - 5.0
      //				x = player_x + 5.0
      //				y = player_y + 5.0
      //				GET_RANDOM_CAR_OF_TYPE_IN_AREA text_x text_y x y -1 car
      //				IF NOT car = -1
      //					GET_CAR_COORDINATES	car	text_x text_y text_z
      //					x = player_x - text_x
      //					y = player_y - text_y
      //					z = player_z - text_z
      //					SAVE_FLOAT_TO_DEBUG_FILE x
      //					SAVE_FLOAT_TO_DEBUG_FILE y
      //					SAVE_FLOAT_TO_DEBUG_FILE z
      //					SAVE_FLOAT_TO_DEBUG_FILE 9.9999
      //					SAVE_FLOAT_TO_DEBUG_FILE 9.9999
      //					SAVE_NEWLINE_TO_DEBUG_FILE
      //					GET_OFFSET_FROM_CAR_IN_WORLD_COORDS car x y z corona_x corona_y corona_z
      //					MARK_CAR_AS_NO_LONGER_NEEDED car
      //					car = -1
      //				ELSE
      //					SAVE_FLOAT_TO_DEBUG_FILE 9.9999
      //					SAVE_NEWLINE_TO_DEBUG_FILE
      //				ENDIF
      //				relative_button_press = 1
      //			ENDIF
      //			DRAW_CORONA corona_x corona_y corona_z 0.2 CORONATYPE_CIRCLE FLARETYPE_NONE 250 0 0
      //		ENDIF
      //
      //		IF NOT IS_BUTTON_PRESSED PAD2 LEFTSHOULDER1
      //			IF NOT IS_BUTTON_PRESSED PAD2 LEFTSHOULDER2
      //				IF relative_button_press = 1
      //					relative_button_press = 0
      //				ENDIF
      //			ENDIF
      //		ENDIF
      ///////////////////////////////////////////////////////////////////////


      /// CREATE A CAR - right shoulder1//////////////////////////////////////////

      if (Pad.IsButtonPressed(1 /* PAD2 */, 6 /* RIGHTSHOULDER1 */) && flag_create_car == 0 && button_press_flag == 0) {
        [x_float_m, y_float_m, z_float_m] = $.player1.getCoordinates();
        player_heading_debug = $.player1.getHeading();
        if (player_heading_debug < 45.0 && player_heading_debug > 0.0) {
          y_float_m += 5.0;
          debug_car_heading = 90.0;
        }
        if (player_heading_debug < 360.0 && player_heading_debug > 315.0) {
          y_float_m += 5.0;
          debug_car_heading = 90.0;
        }
        if (player_heading_debug < 135.0 && player_heading_debug > 45.0) {
          x_float_m -= 5.0;
          debug_car_heading = 180.0;
        }
        if (player_heading_debug < 225.0 && player_heading_debug > 135.0) {
          y_float_m -= 5.0;
          debug_car_heading = 270.0;
        }
        if (player_heading_debug < 315.0 && player_heading_debug > 225.0) {
          x_float_m += 5.0;
          debug_car_heading = 0.0;
        }
        z_float_m = z_float_m + 0.6;
        z_float_m = World.GetGroundZFor3DCoord(x_float_m, y_float_m, z_float_m);
        if (!($.player1.isPlaying())) {
          // SCM GOTO → mission_start_debug (not lowered; manual jump required)
          throw new Error("unresolved GOTO mission_start_debug"); // fallback: would break linear control flow
        }


        // SCM label next_carzzz
        await asyncWait(0);
        if (!(Pad.IsButtonPressed(1 /* PAD2 */, 16 /* CROSS */))) {


          if (initial_create_car == 1) {
            ++counter_create_car;
          }
          if (initial_create_car == 0) {
            counter_create_car = landstal;
            initial_create_car = 1;
          }
          if (counter_create_car > 236) {
            counter_create_car = landstal;
          }
          if (counter_create_car == chopper) {
            counter_create_car = angel;
          }
          if (counter_create_car == airtrain || counter_create_car == deaddodo) {
            counter_create_car = speeder;
          }


          flag_create_car = 1;
          button_press_flag = 1;
        }
        else {
          if (initial_create_car == 1) {
            --counter_create_car;
          }
          if (initial_create_car == 0) {
            counter_create_car = 236;
            initial_create_car = 1;
          }
          initial_create_car = 1;
          if (counter_create_car < landstal) {
            counter_create_car = 236;
          }
          if (counter_create_car == chopper) {
            counter_create_car = cuban;
          }
          if (counter_create_car == airtrain || counter_create_car == deaddodo) {
            counter_create_car = gangbur;
          }
          flag_create_car = 1;
          button_press_flag = 1;
        }
        if (!(Pad.IsButtonPressed(1 /* PAD2 */, 14 /* SQUARE */))) {
          if (!(Streaming.IsModelAvailable(counter_create_car))) {
            // SCM GOTO → next_carzzz (not lowered; manual jump required)
            throw new Error("unresolved GOTO next_carzzz"); // fallback: would break linear control flow
          }
          Streaming.RequestModel(counter_create_car);
          Text.PrintNow("LOADCAR", 250, 1); //"Loading vehicle, press pad2 leftshoulder1 to cancel"
          Streaming.LoadAllModelsNow();
          while (!(Streaming.HasModelLoaded(counter_create_car))) {
            await asyncWait(0);
            Text.PrintNow("LOADCAR", 80, 1); //"Loading vehicle, press pad2 leftshoulder1 to cancel"
            if (Pad.IsButtonPressed(1 /* PAD2 */, 4 /* LEFTSHOULDER1 */)) {
              // SCM GOTO → next_carzzz (not lowered; manual jump required)
              throw new Error("unresolved GOTO next_carzzz"); // fallback: would break linear control flow
            }



          }
          magic_car = Car.Create(counter_create_car, x_float_m, y_float_m, z_float_m);
          Text.ClearThisBigPrint("NUMBER");
          Text.PrintWithNumberBig("NUMBER", counter_create_car, 500, 4);
          magic_car.setHeading(debug_car_heading);
          magic_car.lockDoors(1 /* CARLOCK_UNLOCKED */);
          Streaming.MarkModelAsNoLongerNeeded(counter_create_car);
          magic_car.markAsNoLongerNeeded();
        }
        else {
          counter_create_car = counter_create_car + 10;
          Text.PrintWithNumberBig("NUMBER", counter_create_car, 500, 4);
        }


      }
      if (!(Pad.IsButtonPressed(1 /* PAD2 */, 6 /* RIGHTSHOULDER1 */)) && button_press_flag == 1) {
        button_press_flag = 0;
      }


      if (Pad.IsButtonPressed(1 /* PAD2 */, 6 /* RIGHTSHOULDER1 */) && flag_create_car == 1 && button_press_flag == 0) {
        if (Car.IsDead(magic_car)) {
          magic_car.delete();
        }
        else {
          if (!($.player1.isInCar(magic_car))) {
            magic_car.delete();
          }
          else {
            magic_car.markAsNoLongerNeeded();
          }
        }
        flag_create_car = 0;
        initial_car_selected = 0;
        button_press_flag = 1;
      }



    }




    /// MISSION SKIP //////////////////////////////////////////////////////
    // ********************************************************************************************************************
    //INDUSTRIAL MISSION SKIP RIGHT ***************************************************************************************
    //IF flag_player_on_mission = 0
    //IF NOT IS_BUTTON_PRESSED PAD2 CROSS
    if (Pad.IsButtonPressed(1 /* PAD2 */, 11 /* DPADRIGHT */)) {
      //	IF NOT button_pressed_main = 0
      if ($.player1.isPlaying()) {
        button_pressed_main++;
        if (button_pressed_main > 62) {
          button_pressed_main = 1;
        }
        Mission.Fail();
        await terminate_all_scripts();  // SCM GOSUB terminate_all_scripts
        if (button_pressed_main == 1) {
          Text.PrintBig("INT_B", 1000, 4); //"Hotel cut scene"
          Text.PrintNow("CUT", 2000, 1);
          await asyncWait(80);
          $.flag_hotel_mission1_passed = 0;
          // START_NEW_SCRIPT hotel_mission1_loop
          goto_thereX = hotelX_d;
          goto_thereY = $.hotelY;
          goto_thereZ = $.hotelZ;
        }
        if (button_pressed_main == 2) {
          Text.PrintBig("LAW_1", 1000, 4); //"lawyer mission 1"
          Text.PrintNow("LAW", 2000, 1);
          await asyncWait(80);
          $.flag_lawyer_mission1_passed = 0;
          // START_NEW_SCRIPT lawyer_mission1_loop
          $.lawyer_contact_blip = Blip.AddSpriteForContactPoint($.lawyerX, $.lawyerY, $.lawyerZ, $.the_lawyer_blip);
          goto_thereX = lawyerX_d;
          goto_thereY = $.lawyerY;
          goto_thereZ = $.lawyerZ;
        }
        if (button_pressed_main == 3) {
          Text.PrintBig("LAW_2", 1000, 4); //"lawyer mission 2"
          Text.PrintNow("LAW", 2000, 1);
          await asyncWait(80);
          $.flag_lawyer_mission2_passed = 0;
          // START_NEW_SCRIPT lawyer_mission2_loop
          $.lawyer_contact_blip = Blip.AddSpriteForContactPoint($.lawyerX, $.lawyerY, $.lawyerZ, $.the_lawyer_blip);
          goto_thereX = lawyerX_d;
          goto_thereY = $.lawyerY;
          goto_thereZ = $.lawyerZ;
        }
        if (button_pressed_main == 4) {
          Text.PrintBig("LAW_3", 1000, 4); //"lawyer mission 3"
          Text.PrintNow("LAW", 2000, 1);
          await asyncWait(80);
          $.flag_lawyer_mission3_passed = 0;
          // START_NEW_SCRIPT lawyer_mission3_loop
          $.lawyer_contact_blip = Blip.AddSpriteForContactPoint($.lawyerX, $.lawyerY, $.lawyerZ, $.the_lawyer_blip);
          goto_thereX = lawyerX_d;
          goto_thereY = $.lawyerY;
          goto_thereZ = $.lawyerZ;
        }
        if (button_pressed_main == 5) {
          Text.PrintBig("LAW_4", 1000, 4); //"lawyer mission 4"
          Text.PrintNow("LAW", 2000, 1);
          await asyncWait(80);
          $.flag_lawyer_mission4_passed = 0;
          // START_NEW_SCRIPT lawyer_mission4_loop
          $.lawyer_contact_blip = Blip.AddSpriteForContactPoint($.lawyerX, $.lawyerY, $.lawyerZ, $.the_lawyer_blip);
          goto_thereX = lawyerX_d;
          goto_thereY = $.lawyerY;
          goto_thereZ = $.lawyerZ;
        }


        if (button_pressed_main == 6) {
          Text.PrintBig("COL_1", 1000, 4); //"General mission 1"
          Text.PrintNow("GENERAL", 2000, 1);
          await asyncWait(80);
          $.flag_general_mission1_passed = 0;
          // START_NEW_SCRIPT general_mission1_loop
          $.general_contact_blip = Blip.AddSpriteForContactPoint($.generalX, $.generalY, $.generalZ, $.the_general_blip);
          goto_thereX = $.generalX;
          goto_thereY = generalY_d;
          goto_thereZ = $.generalZ;
        }
        if (button_pressed_main == 7) {
          Text.PrintBig("COL_2", 1000, 4); //"General mission 2"
          Text.PrintNow("GENERAL", 2000, 1);
          await asyncWait(80);
          $.flag_general_mission2_passed = 0;
          // START_NEW_SCRIPT general_mission2_loop
          $.general_contact_blip = Blip.AddSpriteForContactPoint($.generalX, $.generalY, $.generalZ, $.the_general_blip);
          goto_thereX = $.generalX;
          goto_thereY = generalY_d;
          goto_thereZ = $.generalZ;
        }
        if (button_pressed_main == 8) {
          Text.PrintBig("COL_3", 1000, 4); //"General mission 3"
          Text.PrintNow("GENERAL", 2000, 1);
          await asyncWait(80);
          $.flag_general_mission3_passed = 0;
          // START_NEW_SCRIPT general_mission3_loop
          $.general_contact_blip = Blip.AddSpriteForContactPoint($.generalX, $.generalY, $.generalZ, $.the_general_blip);
          goto_thereX = $.generalX;
          goto_thereY = generalY_d;
          goto_thereZ = $.generalZ;
        }
        if (button_pressed_main == 9) {
          Text.PrintBig("COL_4", 1000, 4); //"General mission 4"
          Text.PrintNow("GENERAL", 2000, 1);
          await asyncWait(80);
          $.flag_general_mission4_passed = 0;
          // START_NEW_SCRIPT general_mission4_loop
          $.general_contact_blip = Blip.AddSpriteForContactPoint($.generalX, $.generalY, $.generalZ, $.the_general_blip);
          goto_thereX = $.generalX;
          goto_thereY = generalY_d;
          goto_thereZ = $.generalZ;
        }
        if (button_pressed_main == 10) {
          Text.PrintBig("COL_5", 1000, 4); //"General mission 5"
          Text.PrintNow("GENERAL", 2000, 1);
          await asyncWait(80);
          // START_NEW_SCRIPT general_mission5_loop
          $.general_contact_blip = Blip.AddSpriteForContactPoint($.generalX, $.generalY, $.generalZ, $.the_general_blip);
          goto_thereX = $.generalX;
          goto_thereY = generalY_d;
          goto_thereZ = $.generalZ;
        }
        if (button_pressed_main == 11) {
          Text.PrintBig("COK_1", 1000, 4); //"baron mission 1"
          Text.PrintNow("COKE", 2000, 1);
          await asyncWait(80);
          $.flag_baron_mission1_passed = 0;
          // START_NEW_SCRIPT baron_mission1_loop
          $.baron_contact_blip = Blip.AddSpriteForContactPoint($.baronX, $.baronY, $.baronZ, $.the_baron_blip);
          goto_thereX = $.baronX;
          goto_thereY = baronY_d;
          goto_thereZ = $.baronZ;
        }
        if (button_pressed_main == 12) {
          Text.PrintBig("COK_2", 1000, 4); //"baron mission 2"
          Text.PrintNow("COKE", 2000, 1);
          await asyncWait(80);
          $.flag_baron_mission2_passed = 0;
          // START_NEW_SCRIPT baron_mission2_loop
          $.baron_contact_blip = Blip.AddSpriteForContactPoint($.baronX, $.baronY, $.baronZ, $.the_baron_blip);
          goto_thereX = $.baronX;
          goto_thereY = baronY_d;
          goto_thereZ = $.baronZ;
        }
        if (button_pressed_main == 13) {
          Text.PrintBig("COK_3", 1000, 4); //"baron mission 3"
          Text.PrintNow("COKE", 2000, 1);
          await asyncWait(80);
          $.flag_baron_mission3_passed = 0;
          // START_NEW_SCRIPT baron_mission3_loop
          $.baron_contact_blip = Blip.AddSpriteForContactPoint($.baronX, $.baronY, $.baronZ, $.the_baron_blip);
          goto_thereX = $.baronX;
          goto_thereY = baronY_d;
          goto_thereZ = $.baronZ;
        }
        if (button_pressed_main == 14) {
          Text.PrintBig("COK_4", 1000, 4); //"baron mission 4"
          Text.PrintNow("COKE", 2000, 1);
          await asyncWait(80);
          $.flag_baron_mission4_passed = 0;
          // START_NEW_SCRIPT baron_mission4_loop
          $.baron_contact_blip = Blip.AddSpriteForContactPoint($.baronX, $.baronY, $.baronZ, $.the_baron_blip);
          goto_thereX = $.baronX;
          goto_thereY = baronY_d;
          goto_thereZ = $.baronZ;
        }
        if (button_pressed_main == 15) {
          Text.PrintBig("KENT_1", 1000, 4); //"Kent paul 1"
          Text.PrintNow("KENT", 2000, 1);
          await asyncWait(80);
          $.flag_kent_mission1_passed = 0;
          $.flag_kent_mission_active = 1;
          // START_NEW_SCRIPT kent_mission1_loop
          $.kent_contact_blip = Blip.AddSpriteForContactPoint(491.0, -77.7, 10.4, $.the_kent_blip);
          goto_thereX = 495.604;
          goto_thereY = -82.80;
          goto_thereZ = 9.03;
        }
        if (button_pressed_main == 16) {
          Text.PrintBig("ASS_1", 1000, 4); //"baron mission 5"
          Text.PrintNow("COKE", 2000, 1);
          await asyncWait(80);
          $.flag_baron_mission5_passed = 0;
          // START_NEW_SCRIPT baron_mission5_loop
          $.baron_contact_blip = Blip.AddSpriteForContactPoint($.baron2X, $.baron2Y, $.baron2Z, 7);
          goto_thereX = $.baron2X;
          goto_thereY = baron2Y_d;
          goto_thereZ = $.baron2Z;
        }
        if (button_pressed_main == 17) {
          Text.PrintBig("TEX_1", 1000, 4); //"TEX mission 1"
          Text.PrintNow("AVERY", 2000, 1);
          await asyncWait(80);
          $.flag_sergio_mission1_passed = 0;
          // START_NEW_SCRIPT serg_mission1_loop
          $.sergio_contact_blip = Blip.AddSpriteForContactPoint($.sergiox, $.sergioy, $.sergioz, $.the_sergio_blip);
          goto_thereX = $.sergioX;
          goto_thereY = sergioY_d;
          goto_thereZ = $.sergioZ;
        }
        if (button_pressed_main == 18) {
          Text.PrintBig("TEX_3", 1000, 4); //"TEX mission 3"
          Text.PrintNow("AVERY", 2000, 1);
          await asyncWait(80);
          $.flag_sergio_mission2_passed = 0;
          // START_NEW_SCRIPT serg_mission2_loop
          $.sergio_contact_blip = Blip.AddSpriteForContactPoint($.sergiox, $.sergioy, $.sergioz, $.the_sergio_blip);
          goto_thereX = $.sergioX;
          goto_thereY = sergioY_d;
          goto_thereZ = $.sergioZ;
        }
        if (button_pressed_main == 19) {
          Text.PrintBig("TEX_2", 1000, 4); //"TEX mission 2"
          Text.PrintNow("AVERY", 2000, 1);
          await asyncWait(80);
          $.flag_sergio_mission3_passed = 0;
          // START_NEW_SCRIPT serg_mission3_loop
          $.sergio_contact_blip = Blip.AddSpriteForContactPoint($.sergiox, $.sergioy, $.sergioz, $.the_sergio_blip);
          goto_thereX = $.sergioX;
          goto_thereY = sergioY_d;
          goto_thereZ = $.sergioZ;
        }
        if (button_pressed_main == 20) {
          Text.PrintBig("BANK_1", 1000, 4); //"bankjob mission 1"
          Text.PrintNow("BANK", 2000, 1);
          await asyncWait(80);
          $.flag_bankjob_mission1_passed = 0;
          // START_NEW_SCRIPT bankjob_mission1_loop
          $.bankjob_contact_blip = Blip.AddSpriteForContactPoint($.bankjobX, $.bankjobY, $.bankjobZ, $.the_bankjob_blip);
          goto_thereX = 491.0;
          goto_thereY = -77.7;
          goto_thereZ = 10.4;
        }
        if (button_pressed_main == 21) {
          Text.PrintBig("BANK_2", 1000, 4); //"bankjob mission 2"
          Text.PrintNow("BANK", 2000, 1);
          await asyncWait(80);
          $.flag_bankjob_mission2_passed = 0;
          // START_NEW_SCRIPT bankjob_mission2_loop
          $.bankjob_contact_blip = Blip.AddSpriteForContactPoint($.bankjobX, $.bankjobY, $.bankjobZ, $.the_bankjob_blip);
          goto_thereX = 491.0;
          goto_thereY = -77.7;
          goto_thereZ = 10.4;
        }
        if (button_pressed_main == 22) {
          Text.PrintBig("BANK_3", 1000, 4); //"bankjob mission 3"
          Text.PrintNow("BANK", 2000, 1);
          await asyncWait(80);
          $.flag_bankjob_mission3_passed = 0;
          // START_NEW_SCRIPT bankjob_mission3_loop
          $.bankjob_contact_blip = Blip.AddSpriteForContactPoint($.bankjobX, $.bankjobY, $.bankjobZ, $.the_bankjob_blip);
          goto_thereX = 491.0;
          goto_thereY = -77.7;
          goto_thereZ = 10.4;
        }
        if (button_pressed_main == 23) {
          Text.PrintBig("BANK_4", 1000, 4); //"bankjob mission 4"
          Text.PrintNow("BANK", 2000, 1);
          await asyncWait(80);
          $.flag_bankjob_mission4_passed = 0;
          // START_NEW_SCRIPT bankjob_mission4_loop
          $.bankjob_contact_blip = Blip.AddSpriteForContactPoint($.bankjobX, $.bankjobY, $.bankjobZ, $.the_bankjob_blip);
          goto_thereX = 491.0;
          goto_thereY = -77.7;
          goto_thereZ = 10.4;
        }
        if (button_pressed_main == 24) {
          Text.PrintBig("PHIL_1", 1000, 4); //"phil mission 1"
          Text.PrintNow("PHIL", 2000, 1);
          await asyncWait(80);
          $.flag_phil_mission1_passed = 0;
          // START_NEW_SCRIPT phil_mission1_loop
          $.phil_contact_blip = Blip.AddSpriteForContactPoint($.philX, $.philY, $.philZ, $.the_phil_blip);
          goto_thereX = $.philX;
          goto_thereY = philY_d;
          goto_thereZ = $.philZ;
        }
        if (button_pressed_main == 25) {
          Text.PrintBig("PHIL_2", 1000, 4); //"phil mission 2"
          Text.PrintNow("PHIL", 2000, 1);
          await asyncWait(80);
          $.flag_phil_mission2_passed = 0;
          // START_NEW_SCRIPT phil_mission2_loop
          $.phil_contact_blip = Blip.AddSpriteForContactPoint($.philX, $.philY, $.philZ, $.the_phil_blip);
          goto_thereX = $.philX;
          goto_thereY = philY_d;
          goto_thereZ = $.philZ;
        }
        if (button_pressed_main == 26) {
          Text.PrintBig("PORN_1", 1000, 4); //"porn mission 1"
          Text.PrintNow("PORN", 2000, 1);
          await asyncWait(80);
          $.flag_porn_mission1_passed = 0;
          // START_NEW_SCRIPT porn_mission1_loop
          $.porn_contact_blip = Blip.AddSpriteForContactPoint($.pornX, $.pornY, $.pornZ, $.the_porn_blip);
          goto_thereX = $.pornX;
          goto_thereY = pornY_d;
          goto_thereZ = $.pornZ;
        }
        if (button_pressed_main == 27) {
          Text.PrintBig("PORN_2", 1000, 4); //"porn mission 2"
          Text.PrintNow("PORN", 2000, 1);
          await asyncWait(80);
          $.flag_porn_mission2_passed = 0;
          // START_NEW_SCRIPT porn_mission2_loop
          $.porn_contact_blip = Blip.AddSpriteForContactPoint($.pornX, $.pornY, $.pornZ, $.the_porn_blip);
          goto_thereX = $.pornX;
          goto_thereY = pornY_d;
          goto_thereZ = $.pornZ;
        }
        if (button_pressed_main == 28) {
          Text.PrintBig("PORN_3", 1000, 4); //"porn mission 3"
          Text.PrintNow("PORN", 2000, 1);
          await asyncWait(80);
          $.flag_porn_mission3_passed = 0;
          // START_NEW_SCRIPT porn_mission3_loop
          $.porn_contact_blip = Blip.AddSpriteForContactPoint($.pornX, $.pornY, $.pornZ, $.the_porn_blip);
          goto_thereX = $.pornX;
          goto_thereY = pornY_d;
          goto_thereZ = $.pornZ;
        }
        if (button_pressed_main == 29) {
          Text.PrintBig("PORN_4", 1000, 4); //"porn mission 4"
          Text.PrintNow("PORN", 2000, 1);
          await asyncWait(80);
          $.flag_porn_mission4_passed = 0;
          // START_NEW_SCRIPT porn_mission4_loop
          $.porn_contact_blip = Blip.AddSpriteForContactPoint($.pornX, $.pornY, $.pornZ, $.the_porn_blip);
          goto_thereX = $.pornX;
          goto_thereY = pornY_d;
          goto_thereZ = $.pornZ;
        }
        if (button_pressed_main == 30) {
          Text.PrintBig("BUD_1", 1000, 4); //"protect mission 1"
          Text.PrintNow("PROT", 2000, 1);
          await asyncWait(80);
          $.flag_protect_mission1_passed = 0;
          // START_NEW_SCRIPT protect_mission1_loop
          $.protect_contact_blip = Blip.AddSpriteForContactPoint(-378.3, -579.8, 24.5, RADAR_SPRITE_TOMMY);
          goto_thereX = $.baronX;
          goto_thereY = baronY_d;
          goto_thereZ = $.baronZ;
        }
        if (button_pressed_main == 31) {
          Text.PrintBig("BUD_2", 1000, 4); //"protect mission 2"
          Text.PrintNow("PROT", 2000, 1);
          await asyncWait(80);
          $.flag_protect_mission2_passed = 0;
          // START_NEW_SCRIPT protect_mission2_loop
          $.protect_contact_blip = Blip.AddSpriteForContactPoint(-397.4, -561.3, 18.7, RADAR_SPRITE_TOMMY);
          goto_thereX = $.baronX;
          goto_thereY = baronY_d;
          goto_thereZ = $.baronZ;
        }
        if (button_pressed_main == 32) {
          Text.PrintBig("BUD_3", 1000, 4); //"protect mission 3"
          Text.PrintNow("PROT", 2000, 1);
          await asyncWait(80);
          $.flag_protect_mission3_passed = 0;
          // START_NEW_SCRIPT protect_mission3_loop
          $.protect_contact_blip = Blip.AddSpriteForContactPoint(-348.5, -541.8, 16.4, RADAR_SPRITE_TOMMY);
          goto_thereX = $.baronX;
          goto_thereY = baronY_d;
          goto_thereZ = $.baronZ;
        }
        if (button_pressed_main == 33) {
          Text.PrintBig("CNT_1", 1000, 4); //"counter mission 1"
          Text.PrintNow("COUNT", 2000, 1);
          await asyncWait(80);
          $.flag_counter_mission1_passed = 0;
          // START_NEW_SCRIPT counter_mission1_loop
          $.counter_contact_blip = Blip.AddSpriteForContactPoint($.counterX, $.counterY, $.counterZ, $.the_counter_blip);
          goto_thereX = $.counterX;
          goto_thereY = counterY_d;
          goto_thereZ = $.counterZ;
        }
        if (button_pressed_main == 34) {
          Text.PrintBig("CNT_2", 1000, 4); //"counter mission 2"
          Text.PrintNow("COUNT", 2000, 1);
          await asyncWait(80);
          $.flag_counter_mission2_passed = 0;
          // START_NEW_SCRIPT counter_mission2_loop
          $.counter_contact_blip = Blip.AddSpriteForContactPoint($.counterX, $.counterY, $.counterZ, $.the_counter_blip);
          goto_thereX = $.counterX;
          goto_thereY = counterY_d;
          goto_thereZ = $.counterZ;
        }
        if (button_pressed_main == 35) {
          Text.PrintBig("CAP_1", 1000, 4); //"finale mission 1"
          Text.PrintNow("FIN", 2000, 1);
          await asyncWait(80);
          $.flag_finale_mission1_passed = 0;
          $.malibu_asset_acquired = 1;
          $.porn_asset_acquired = 1;
          $.icecream_asset_acquired = 1;
          $.taxifirm_asset_acquired = 1;
          $.boatyard_asset_acquired = 1;
          $.showroom_asset_acquired = 1;
          // START_NEW_SCRIPT finale_mission1_loop
          $.baron_contact_blip = Blip.AddSpriteForContactPoint($.counterX, $.counterY, $.counterZ, $.the_counter_blip);
          goto_thereX = $.counterX;
          goto_thereY = counterY_d;
          goto_thereZ = $.counterZ;
        }
        if (button_pressed_main == 36) {
          Text.PrintBig("FIN_1", 1000, 4); //"finale mission 2"
          Text.PrintNow("FIN", 2000, 1);
          await asyncWait(80);
          $.flag_finale_mission2_passed = 0;
          // START_NEW_SCRIPT finale_mission2_loop
          $.baron_contact_blip = Blip.AddSpriteForContactPoint(-378.3, -579.8, 24.5, RADAR_SPRITE_TOMMY);
          goto_thereX = $.baronX;
          goto_thereY = baronY_d;
          goto_thereZ = $.baronZ;
        }
        if (button_pressed_main == 37) {
          Text.PrintBig("BIKE_1", 1000, 4); //"bikers mission 1"
          Text.PrintNow("BIKE", 2000, 1);
          await asyncWait(80);
          $.flag_bikers_mission1_passed = 0;
          // START_NEW_SCRIPT bikers_mission1_loop
          $.bikers_contact_blip = Blip.AddSpriteForContactPoint($.bikersX, $.bikersY, $.bikersZ, $.the_biker_blip);
          goto_thereX = $.bikersX;
          goto_thereY = bikersY_d;
          goto_thereZ = $.bikersZ;
        }
        if (button_pressed_main == 38) {
          Text.PrintBig("BIKE_2", 1000, 4); //"bikers mission 2"
          Text.PrintNow("BIKE", 2000, 1);
          await asyncWait(80);
          $.flag_bikers_mission2_passed = 0;
          // START_NEW_SCRIPT bikers_mission2_loop
          $.bikers_contact_blip = Blip.AddSpriteForContactPoint($.bikersX, $.bikersY, $.bikersZ, $.the_biker_blip);
          goto_thereX = $.bikersX;
          goto_thereY = bikersY_d;
          goto_thereZ = $.bikersZ;
        }
        if (button_pressed_main == 39) {
          Text.PrintBig("BIKE_3", 1000, 4); //"bikers mission 3"
          Text.PrintNow("BIKE", 2000, 1);
          await asyncWait(80);
          $.flag_bikers_mission3_passed = 0;
          // START_NEW_SCRIPT bikers_mission3_loop
          $.bikers_contact_blip = Blip.AddSpriteForContactPoint($.bikersX, $.bikersY, $.bikersZ, $.the_biker_blip);
          goto_thereX = $.bikersX;
          goto_thereY = bikersY_d;
          goto_thereZ = $.bikersZ;
        }
        if (button_pressed_main == 40) {
          Text.PrintBig("ROCK_1", 1000, 4); //"Rockband mission 1"
          Text.PrintNow("ROCK", 2000, 1);
          await asyncWait(80);
          $.flag_rock_mission1_passed = 0;
          // START_NEW_SCRIPT rock_mission1_loop
          $.rock_contact_blip = Blip.AddSpriteForContactPoint($.rockX, $.rockY, $.rockZ, $.the_rock_blip);
          goto_thereX = rockX_d;
          goto_thereY = rockY_d;
          goto_thereZ = $.rockZ;
        }
        if (button_pressed_main == 41) {
          Text.PrintBig("ROCK_2", 1000, 4); //"Rockband mission 2"
          Text.PrintNow("ROCK", 2000, 1);
          await asyncWait(80);
          $.flag_rock_mission2_passed = 0;
          // START_NEW_SCRIPT rock_mission2_loop
          $.rock_contact_blip = Blip.AddSpriteForContactPoint($.rockX, $.rockY, $.rockZ, $.the_rock_blip);
          goto_thereX = rockX_d;
          goto_thereY = rockY_d;
          goto_thereZ = $.rockZ;
        }
        if (button_pressed_main == 42) {
          Text.PrintBig("ROCK_3", 1000, 4); //"Rockband mission 3"
          Text.PrintNow("ROCK", 2000, 1);
          await asyncWait(80);
          $.flag_rock_mission3_passed = 0;
          // START_NEW_SCRIPT rock_mission3_loop
          $.rock_contact_blip = Blip.AddSpriteForContactPoint($.rockX, $.rockY, $.rockZ, $.the_rock_blip);
          goto_thereX = rockX_d;
          goto_thereY = rockY_d;
          goto_thereZ = $.rockZ;
        }
        if (button_pressed_main == 43) {
          Text.PrintBig("CUB_1", 1000, 4); //"Cuban mission 1"
          Text.PrintNow("CUBANM", 2000, 1);
          await asyncWait(80);
          $.flag_cuban_mission1_passed = 0;
          // START_NEW_SCRIPT cuban_mission1_loop
          $.cuban_contact_blip = Blip.AddSpriteForContactPoint($.cubanX, $.cubanY, $.cubanZ, $.the_cuban_blip);
          goto_thereX = $.cubanX;
          goto_thereY = cubanY_d;
          goto_thereZ = $.cubanZ;
        }
        if (button_pressed_main == 44) {
          Text.PrintBig("CUB_2", 1000, 4); //"Cuban mission 2"
          Text.PrintNow("CUBANM", 2000, 1);
          await asyncWait(80);
          $.flag_cuban_mission2_passed = 0;
          // START_NEW_SCRIPT cuban_mission2_loop
          $.cuban_contact_blip = Blip.AddSpriteForContactPoint($.cubanX, $.cubanY, $.cubanZ, $.the_cuban_blip);
          goto_thereX = $.cubanX;
          goto_thereY = cubanY_d;
          goto_thereZ = $.cubanZ;
        }
        if (button_pressed_main == 45) {
          Text.PrintBig("CUB_3", 1000, 4); //"Cuban mission 3"
          Text.PrintNow("CUBANM", 2000, 1);
          await asyncWait(80);
          $.flag_cuban_mission3_passed = 0;
          // START_NEW_SCRIPT cuban_mission3_loop
          $.cuban_contact_blip = Blip.AddSpriteForContactPoint($.cubanX, $.cubanY, $.cubanZ, $.the_cuban_blip);
          goto_thereX = $.cubanX;
          goto_thereY = cubanY_d;
          goto_thereZ = $.cubanZ;
        }
        if (button_pressed_main == 46) {
          Text.PrintBig("CUB_4", 1000, 4); //"Cuban mission 4"
          Text.PrintNow("CUBANM", 2000, 1);
          await asyncWait(80);
          $.flag_cuban_mission4_passed = 0;
          $.flag_haitian_mission3_passed = 1;
          // START_NEW_SCRIPT cuban_mission4_loop
          $.cuban_contact_blip = Blip.AddSpriteForContactPoint($.cubanX, $.cubanY, $.cubanZ, $.the_cuban_blip);
          goto_thereX = $.cubanX;
          goto_thereY = cubanY_d;
          goto_thereZ = $.cubanZ;
        }
        if (button_pressed_main == 47) {
          Text.PrintBig("HAT_1", 1000, 4); //"haitian mission 1"
          Text.PrintNow("HAIT", 2000, 1);
          await asyncWait(80);
          $.flag_haitian_mission1_passed = 0;
          // START_NEW_SCRIPT haitian_mission1_loop
          $.haitian_contact_blip = Blip.AddSpriteForContactPoint($.haitianX, $.haitianY, $.haitianZ, $.the_haitian_blip);
          goto_thereX = $.haitianX;
          goto_thereY = haitianY_d;
          goto_thereZ = $.haitianZ;
        }
        if (button_pressed_main == 48) {
          Text.PrintBig("HAT_2", 1000, 4); //"haitian mission 2"
          Text.PrintNow("HAIT", 2000, 1);
          await asyncWait(80);
          $.flag_haitian_mission2_passed = 0;
          // START_NEW_SCRIPT haitian_mission2_loop
          $.haitian_contact_blip = Blip.AddSpriteForContactPoint($.haitianX, $.haitianY, $.haitianZ, $.the_haitian_blip);
          goto_thereX = $.haitianX;
          goto_thereY = haitianY_d;
          goto_thereZ = $.haitianZ;
        }
        if (button_pressed_main == 49) {
          Text.PrintBig("HAT_3", 1000, 4); //"haitian mission 3"
          Text.PrintNow("HAIT", 2000, 1);
          await asyncWait(80);
          $.flag_haitian_mission3_passed = 0;
          // START_NEW_SCRIPT haitian_mission3_loop
          $.haitian_contact_blip = Blip.AddSpriteForContactPoint($.haitianX, $.haitianY, $.haitianZ, $.the_haitian_blip);
          goto_thereX = $.haitianX;
          goto_thereY = haitianY_d;
          goto_thereZ = $.haitianZ;
        }
        if (button_pressed_main == 50) {
          Text.PrintBig("JOB_1", 1000, 4); //"assasin mission 1"
          Text.PrintNow("ASM", 2000, 1);
          await asyncWait(80);
          $.flag_assin_mission1_passed = 0;
          // START_NEW_SCRIPT assin_mission1_loop
          $.assasin_contact_blip = Blip.AddSpriteForContactPoint($.ass_1_x, $.ass_1_y, $.ass_1_z, $.the_assasin_blip);
          goto_thereX = $.ass_1_x;
          goto_thereY = $.ass_1_y;
          goto_thereZ = $.ass_1_z;
        }
        if (button_pressed_main == 51) {
          Text.PrintBig("JOB_2", 1000, 4); //"assasin mission 2"
          Text.PrintNow("ASM", 2000, 1);
          await asyncWait(80);
          $.flag_assin_mission2_passed = 0;
          // START_NEW_SCRIPT assin_mission2_loop
          $.assasin_contact_blip = Blip.AddSpriteForContactPoint($.ass_2_x, $.ass_2_y, $.ass_2_z, $.the_assasin_blip);
          goto_thereX = $.ass_2_x;
          goto_thereY = $.ass_2_y;
          goto_thereZ = $.ass_2_z;
        }
        if (button_pressed_main == 52) {
          Text.PrintBig("JOB_3", 1000, 4); //"assasin mission 3"
          Text.PrintNow("ASM", 2000, 1);
          await asyncWait(80);
          $.flag_assin_mission3_passed = 0;
          // START_NEW_SCRIPT assin_mission3_loop
          $.assasin_contact_blip = Blip.AddSpriteForContactPoint($.ass_3_x, $.ass_3_y, $.ass_3_z, $.the_assasin_blip);
          goto_thereX = $.ass_3_x;
          goto_thereY = $.ass_3_y;
          goto_thereZ = $.ass_3_z;
        }
        if (button_pressed_main == 53) {
          Text.PrintBig("JOB_4", 1000, 4); //"assasin mission 4"
          Text.PrintNow("ASM", 2000, 1);
          await asyncWait(80);
          $.flag_assin_mission4_passed = 0;
          // START_NEW_SCRIPT assin_mission4_loop
          $.assasin_contact_blip = Blip.AddSpriteForContactPoint($.ass_4_x, $.ass_4_y, $.ass_4_z, $.the_assasin_blip);
          goto_thereX = $.ass_4_x;
          goto_thereY = $.ass_4_y;
          goto_thereZ = $.ass_4_z;
        }
        if (button_pressed_main == 54) {
          Text.PrintBig("JOB_5", 1000, 4); //"assasin mission 5"
          Text.PrintNow("ASM", 2000, 1);
          await asyncWait(80);
          $.flag_assin_mission5_passed = 0;
          // START_NEW_SCRIPT assin_mission5_loop
          $.assasin_contact_blip = Blip.AddSpriteForContactPoint($.ass_5_x, $.ass_5_y, $.ass_5_z, $.the_assasin_blip);
          goto_thereX = $.ass_5_x;
          goto_thereY = $.ass_5_y;
          goto_thereZ = $.ass_5_z;
        }
        if (button_pressed_main == 55) {
          Text.PrintBig("TAXI_1", 1000, 4); //"taxiwar mission 1"
          Text.PrintNow("TAX_1", 2000, 1);
          await asyncWait(80);
          $.flag_taxiwar_mission1_passed = 0;
          // START_NEW_SCRIPT taxiwar_mission1_loop
          $.taxiwar_contact_blip = Blip.AddSpriteForContactPoint($.taxiwarX, $.taxiwarY, $.taxiwarZ, $.the_taxiwar_blip);
        }
        if (button_pressed_main == 56) {
          Text.PrintBig("TAXI_2", 1000, 4); //"taxiwar mission 2"
          Text.PrintNow("TAX_1", 2000, 1);
          await asyncWait(80);
          $.flag_taxiwar_mission2_passed = 0;
          // START_NEW_SCRIPT taxiwar_mission2_loop
          $.taxiwar_contact_blip = Blip.AddSpriteForContactPoint($.taxiwarX, $.taxiwarY, $.taxiwarZ, $.the_taxiwar_blip);
          goto_thereX = $.taxiwarX;
          goto_thereY = taxiwarY_d;
          goto_thereZ = $.taxiwarz;
        }
        if (button_pressed_main == 57) {
          Text.PrintBig("TAXI_3", 1000, 4); //"taxiwar mission 3"
          Text.PrintNow("TAX_1", 2000, 1);
          await asyncWait(80);
          $.flag_taxiwar_mission3_passed = 0;
          // START_NEW_SCRIPT taxiwar_mission3_loop
          $.taxiwar_contact_blip = Blip.AddSpriteForContactPoint($.taxiwarX, $.taxiwarY, $.taxiwarZ, $.the_taxiwar_blip);
          goto_thereX = $.taxiwarX;
          goto_thereY = taxiwarY_d;
          goto_thereZ = $.taxiwarz;
        }
        if (button_pressed_main == 58) {
          Text.PrintBig("HELI_1", 1000, 4); //"Heli mission 1"
          Text.PrintNow("HELIODD", 2000, 1);
          await asyncWait(80);
          test_heli1_created = 0;
          // START_NEW_SCRIPT heli_mission1_loop
          goto_thereX = $.heli1X;
          goto_thereY = heli1Y_d;
          goto_thereZ = $.heli1Z;
        }
        if (button_pressed_main == 59) {
          Text.PrintBig("TAXCUT", 1000, 4); //"Taxi cut scene"
          await asyncWait(80);
          $.taxibuy_pickup.remove();
          $.taxibuy_pickup = Pickup.CreateForSaleProperty($.taxibuyX, $.taxibuyY, $.taxibuyZ, $.taxibuy_price, "TAXI_L"); //Press R3 to purchase the Taxi Company for $~1~
          // START_NEW_SCRIPT taxibuy_loop
          goto_thereX = $.taxiwarX;
          goto_thereY = $.taxiwarY;
          goto_thereZ = $.taxiwarz;
        }
        if (button_pressed_main == 60) {
          Text.PrintBig("ICECUT", 1000, 4); //"Ice cream cut scene"
          await asyncWait(80);
          $.icebuy_pickup.remove();
          $.icebuy_pickup = Pickup.CreateForSaleProperty($.icecreamX, $.icecreamY, $.icecreamZ, $.icebuy_price, "ICE_L"); //Press R3 to purchase the Taxi Company for $~1~
          // START_NEW_SCRIPT icebuy_loop
          goto_thereX = $.icecreamX;
          goto_thereY = $.icecreamY;
          goto_thereZ = $.icecreamZ;
        }
        if (button_pressed_main == 61) {
          Text.PrintBig("BOATCUT", 1000, 4); //"boat yard cut scene"
          await asyncWait(80);
          $.boatbuy_pickup.remove();
          $.boatbuy_pickup = Pickup.CreateForSaleProperty($.boatbuyX, $.boatbuyY, $.boatbuyZ, $.boatbuy_price, "BOAT_L"); //Press R3 to purchase the Taxi Company for $~1~
          // START_NEW_SCRIPT boatbuy_loop
          goto_thereX = $.boatbuyX;
          goto_thereY = $.boatbuyY;
          goto_thereZ = $.boatbuyZ;
        }
        if (button_pressed_main == 62) {
          Text.PrintBig("CARCUT", 1000, 4); //"CAR yard cut scene"
          await asyncWait(80);
          $.carbuy_pickup.remove();
          $.carbuy_pickup = Pickup.CreateForSaleProperty($.carbuyX, $.carbuyY, $.carbuyZ, $.carbuy_price, "CAR_L"); //Press R3 to purchase the Taxi Company for $~1~
          // START_NEW_SCRIPT property_car_loop
          goto_thereX = $.carbuyX;
          goto_thereY = $.carbuyY;
          goto_thereZ = $.carbuyZ;
        }
        //GOSUB load_and_warp_player

      }
    }
    if (Pad.IsButtonPressed(1 /* PAD2 */, 19 /* RIGHTSHOCK */)) {
      await load_and_warp_player();  // SCM GOSUB load_and_warp_player
    }

    //INDUSTRIAL MISSION SKIP LEFT ************************************************************************************
    if (Pad.IsButtonPressed(1 /* PAD2 */, 10 /* DPADLEFT */)) {
      if ($.player1.isPlaying()) {
        button_pressed_main--;
        if (button_pressed_main < 1) {
          button_pressed_main = 62;
        }
        Mission.Fail();
        await terminate_all_scripts();  // SCM GOSUB terminate_all_scripts
        if (button_pressed_main == 62) {
          Text.PrintBig("CARCUT", 1000, 4); //"CAR yard cut scene"
          await asyncWait(80);
          $.carbuy_pickup.remove();
          $.carbuy_pickup = Pickup.CreateForSaleProperty($.carbuyX, $.carbuyY, $.carbuyZ, $.carbuy_price, "CAR_L"); //Press R3 to purchase the Taxi Company for $~1~
          // START_NEW_SCRIPT property_car_loop
          goto_thereX = $.carbuyX;
          goto_thereY = $.carbuyY;
          goto_thereZ = $.carbuyZ;
        }
        if (button_pressed_main == 61) {
          Text.PrintBig("BOATCUT", 1000, 4); //"boat yard cut scene"
          await asyncWait(80);
          $.boatbuy_pickup.remove();
          $.boatbuy_pickup = Pickup.CreateForSaleProperty($.boatbuyX, $.boatbuyY, $.boatbuyZ, $.boatbuy_price, "BOAT_L"); //Press R3 to purchase the Taxi Company for $~1~
          // START_NEW_SCRIPT boatbuy_loop
          goto_thereX = $.boatbuyX;
          goto_thereZ = $.boatbuyZ;
          goto_thereY = $.boatbuyY;
        }
        if (button_pressed_main == 60) {
          Text.PrintBig("ICECUT", 1000, 4); //"Ice cream cut scene"
          await asyncWait(80);
          $.icebuy_pickup.remove();
          $.icebuy_pickup = Pickup.CreateForSaleProperty($.icecreamX, $.icecreamY, $.icecreamZ, $.icebuy_price, "ICE_L"); //Press R3 to purchase the Taxi Company for $~1~
          // START_NEW_SCRIPT icebuy_loop
          goto_thereX = $.icecreamX;
          goto_thereY = $.icecreamY;
          goto_thereZ = $.icecreamZ;
        }
        if (button_pressed_main == 59) {
          Text.PrintBig("TAXCUT", 1000, 4); //"Taxi cut scene"
          await asyncWait(80);
          $.taxibuy_pickup.remove();
          $.taxibuy_pickup = Pickup.CreateForSaleProperty($.taxibuyX, $.taxibuyY, $.taxibuyZ, $.taxibuy_price, "TAXI_L"); //Press R3 to purchase the Taxi Company for $~1~
          // START_NEW_SCRIPT taxibuy_loop
          goto_thereX = $.taxiwarX;
          goto_thereY = taxiwarY_d;
          goto_thereZ = $.taxiwarz;
        }
        if (button_pressed_main == 58) {
          Text.PrintBig("HELI_1", 1000, 4); //"Heli mission 1"
          Text.PrintNow("HELIODD", 2000, 1);
          await asyncWait(80);
          test_heli1_created = 0;
          // START_NEW_SCRIPT heli_mission1_loop
          goto_thereX = $.heli1X;
          goto_thereY = heli1Y_d;
          goto_thereZ = $.heli1Z;
        }
        if (button_pressed_main == 57) {
          Text.PrintBig("TAXI_3", 1000, 4); //"taxiwar mission 3"
          Text.PrintNow("TAX_1", 2000, 1);
          await asyncWait(80);
          $.flag_taxiwar_mission3_passed = 0;
          // START_NEW_SCRIPT taxiwar_mission3_loop
          $.taxiwar_contact_blip = Blip.AddSpriteForContactPoint($.taxiwarX, $.taxiwarY, $.taxiwarZ, $.the_taxiwar_blip);
          goto_thereX = $.taxiwarX;
          goto_thereY = taxiwarY_d;
          goto_thereZ = $.taxiwarz;
        }
        if (button_pressed_main == 56) {
          Text.PrintBig("TAXI_2", 1000, 4); //"taxiwar mission 2"
          Text.PrintNow("TAX_1", 2000, 1);
          await asyncWait(80);
          $.flag_taxiwar_mission2_passed = 0;
          // START_NEW_SCRIPT taxiwar_mission2_loop
          $.taxiwar_contact_blip = Blip.AddSpriteForContactPoint($.taxiwarX, $.taxiwarY, $.taxiwarZ, $.the_taxiwar_blip);
          goto_thereX = $.taxiwarX;
          goto_thereY = taxiwarY_d;
          goto_thereZ = $.taxiwarz;
        }
        if (button_pressed_main == 55) {
          Text.PrintBig("TAXI_1", 1000, 4); //"taxiwar mission 1"
          Text.PrintNow("TAX_1", 2000, 1);
          await asyncWait(80);
          $.flag_taxiwar_mission1_passed = 0;
          // START_NEW_SCRIPT taxiwar_mission1_loop
          $.taxiwar_contact_blip = Blip.AddSpriteForContactPoint($.taxiwarX, $.taxiwarY, $.taxiwarZ, $.the_taxiwar_blip);
          goto_thereX = $.taxiwarX;
          goto_thereY = taxiwarY_d;
          goto_thereZ = $.taxiwarz;
        }
        if (button_pressed_main == 54) {
          Text.PrintBig("JOB_5", 1000, 4); //"assasin mission 5"
          Text.PrintNow("ASM", 2000, 1);
          await asyncWait(80);
          $.flag_assin_mission5_passed = 0;
          // START_NEW_SCRIPT assin_mission5_loop
          $.assasin_contact_blip = Blip.AddSpriteForContactPoint($.ass_5_x, $.ass_5_y, $.ass_5_z, $.the_assasin_blip);
          goto_thereX = $.ass_5_x;
          goto_thereY = $.ass_5_y;
          goto_thereZ = $.ass_5_z;
        }
        if (button_pressed_main == 53) {
          Text.PrintBig("JOB_4", 1000, 4); //"assasin mission 4"
          Text.PrintNow("ASM", 2000, 1);
          await asyncWait(80);
          $.flag_assin_mission4_passed = 0;
          // START_NEW_SCRIPT assin_mission4_loop
          $.assasin_contact_blip = Blip.AddSpriteForContactPoint($.ass_4_x, $.ass_4_y, $.ass_4_z, $.the_assasin_blip);
          goto_thereX = $.ass_4_x;
          goto_thereY = $.ass_4_y;
          goto_thereZ = $.ass_4_z;
        }
        if (button_pressed_main == 52) {
          Text.PrintBig("JOB_3", 1000, 4); //"assasin mission 3"
          Text.PrintNow("ASM", 2000, 1);
          await asyncWait(80);
          $.flag_assin_mission3_passed = 0;
          // START_NEW_SCRIPT assin_mission3_loop
          $.assasin_contact_blip = Blip.AddSpriteForContactPoint($.ass_3_x, $.ass_3_y, $.ass_3_z, $.the_assasin_blip);
          goto_thereX = $.ass_3_x;
          goto_thereY = $.ass_3_y;
          goto_thereZ = $.ass_3_z;
        }
        if (button_pressed_main == 51) {
          Text.PrintBig("JOB_2", 1000, 4); //"assasin mission 2"
          Text.PrintNow("ASM", 2000, 1);
          await asyncWait(80);
          $.flag_assin_mission2_passed = 0;
          // START_NEW_SCRIPT assin_mission2_loop
          $.assasin_contact_blip = Blip.AddSpriteForContactPoint($.ass_2_x, $.ass_2_y, $.ass_2_z, $.the_assasin_blip);
          goto_thereX = $.ass_2_x;
          goto_thereY = $.ass_2_y;
          goto_thereZ = $.ass_2_z;
        }
        if (button_pressed_main == 50) {
          Text.PrintBig("JOB_1", 1000, 4); //"assasin mission 1"
          Text.PrintNow("ASM", 2000, 1);
          await asyncWait(80);
          $.flag_assin_mission1_passed = 0;
          // START_NEW_SCRIPT assin_mission1_loop
          $.assasin_contact_blip = Blip.AddSpriteForContactPoint($.ass_1_x, $.ass_1_y, $.ass_1_z, $.the_assasin_blip);
          goto_thereX = $.ass_1_x;
          goto_thereY = $.ass_1_y;
          goto_thereZ = $.ass_1_z;
        }
        if (button_pressed_main == 49) {
          Text.PrintBig("HAT_3", 1000, 4); //"haitian mission 3"
          Text.PrintNow("HAIT", 2000, 1);
          await asyncWait(80);
          $.flag_haitian_mission3_passed = 0;
          // START_NEW_SCRIPT haitian_mission3_loop
          $.haitian_contact_blip = Blip.AddSpriteForContactPoint($.haitianX, $.haitianY, $.haitianZ, $.the_haitian_blip);
          goto_thereX = $.haitianX;
          goto_thereY = haitianY_d;
          goto_thereZ = $.haitianZ;
        }
        if (button_pressed_main == 48) {
          Text.PrintBig("HAT_2", 1000, 4); //"haitian mission 2"
          Text.PrintNow("HAIT", 2000, 1);
          await asyncWait(80);
          $.flag_haitian_mission2_passed = 0;
          // START_NEW_SCRIPT haitian_mission2_loop
          $.haitian_contact_blip = Blip.AddSpriteForContactPoint($.haitianX, $.haitianY, $.haitianZ, $.the_haitian_blip);
          goto_thereX = $.haitianX;
          goto_thereY = haitianY_d;
          goto_thereZ = $.haitianZ;
        }
        if (button_pressed_main == 47) {
          Text.PrintBig("HAT_1", 1000, 4); //"haitian mission 1"
          Text.PrintNow("HAIT", 2000, 1);
          await asyncWait(80);
          $.flag_haitian_mission1_passed = 0;
          // START_NEW_SCRIPT haitian_mission1_loop
          $.haitian_contact_blip = Blip.AddSpriteForContactPoint($.haitianX, $.haitianY, $.haitianZ, $.the_haitian_blip);
          goto_thereX = $.haitianX;
          goto_thereY = haitianY_d;
          goto_thereZ = $.haitianZ;
        }
        if (button_pressed_main == 46) {
          Text.PrintBig("CUB_4", 1000, 4); //"Cuban mission 4"
          Text.PrintNow("CUBANM", 2000, 1);
          await asyncWait(80);
          $.flag_cuban_mission4_passed = 0;
          $.flag_haitian_mission3_passed = 1;
          // START_NEW_SCRIPT cuban_mission4_loop
          $.cuban_contact_blip = Blip.AddSpriteForContactPoint($.cubanX, $.cubanY, $.cubanZ, $.the_cuban_blip);
          goto_thereX = $.cubanX;
          goto_thereY = cubanY_d;
          goto_thereZ = $.cubanZ;
        }
        if (button_pressed_main == 45) {
          Text.PrintBig("CUB_3", 1000, 4); //"Cuban mission 3"
          Text.PrintNow("CUBANM", 2000, 1);
          await asyncWait(80);
          $.flag_cuban_mission3_passed = 0;
          // START_NEW_SCRIPT cuban_mission3_loop
          $.cuban_contact_blip = Blip.AddSpriteForContactPoint($.cubanX, $.cubanY, $.cubanZ, $.the_cuban_blip);
          goto_thereX = $.cubanX;
          goto_thereY = cubanY_d;
          goto_thereZ = $.cubanZ;
        }
        if (button_pressed_main == 44) {
          Text.PrintBig("CUB_2", 1000, 4); //"Cuban mission 2"
          Text.PrintNow("CUBANM", 2000, 1);
          await asyncWait(80);
          $.flag_cuban_mission2_passed = 0;
          // START_NEW_SCRIPT cuban_mission2_loop
          $.cuban_contact_blip = Blip.AddSpriteForContactPoint($.cubanX, $.cubanY, $.cubanZ, $.the_cuban_blip);
          goto_thereX = $.cubanX;
          goto_thereY = cubanY_d;
          goto_thereZ = $.cubanZ;
        }
        if (button_pressed_main == 43) {
          Text.PrintBig("CUB_1", 1000, 4); //"Cuban mission 1"
          Text.PrintNow("CUBANM", 2000, 1);
          await asyncWait(80);
          $.flag_cuban_mission1_passed = 0;
          // START_NEW_SCRIPT cuban_mission1_loop
          $.cuban_contact_blip = Blip.AddSpriteForContactPoint($.cubanX, $.cubanY, $.cubanZ, $.the_cuban_blip);
          goto_thereX = $.cubanX;
          goto_thereY = cubanY_d;
          goto_thereZ = $.cubanZ;
        }
        if (button_pressed_main == 42) {
          Text.PrintBig("ROCK_3", 1000, 4); //"Rockband mission 3"
          Text.PrintNow("ROCK", 2000, 1);
          await asyncWait(80);
          $.flag_rock_mission3_passed = 0;
          // START_NEW_SCRIPT rock_mission3_loop
          $.rock_contact_blip = Blip.AddSpriteForContactPoint($.rockX, $.rockY, $.rockZ, $.the_rock_blip);
          goto_thereX = rockX_d;
          goto_thereY = rockY_d;
          goto_thereZ = $.rockZ;
        }
        if (button_pressed_main == 41) {
          Text.PrintBig("ROCK_2", 1000, 4); //"Rockband mission 2"
          Text.PrintNow("ROCK", 2000, 1);
          await asyncWait(80);
          $.flag_rock_mission2_passed = 0;
          // START_NEW_SCRIPT rock_mission2_loop
          $.rock_contact_blip = Blip.AddSpriteForContactPoint($.rockX, $.rockY, $.rockZ, $.the_rock_blip);
          goto_thereX = rockX_d;
          goto_thereY = rockY_d;
          goto_thereZ = $.rockZ;
        }
        if (button_pressed_main == 40) {
          Text.PrintBig("ROCK_1", 1000, 4); //"Rockband mission 1"
          Text.PrintNow("ROCK", 2000, 1);
          await asyncWait(80);
          $.flag_rock_mission1_passed = 0;
          // START_NEW_SCRIPT rock_mission1_loop
          $.rock_contact_blip = Blip.AddSpriteForContactPoint($.rockX, $.rockY, $.rockZ, $.the_rock_blip);
          goto_thereX = rockX_d;
          goto_thereY = rockY_d;
          goto_thereZ = $.rockZ;
        }
        if (button_pressed_main == 39) {
          Text.PrintBig("BIKE_3", 1000, 4); //"bikers mission 3"
          Text.PrintNow("BIKE", 2000, 1);
          await asyncWait(80);
          $.flag_bikers_mission3_passed = 0;
          // START_NEW_SCRIPT bikers_mission3_loop
          $.bikers_contact_blip = Blip.AddSpriteForContactPoint($.bikersX, $.bikersY, $.bikersZ, $.the_biker_blip);
          goto_thereX = $.bikersX;
          goto_thereY = bikersY_d;
          goto_thereZ = $.bikersZ;
        }
        if (button_pressed_main == 38) {
          Text.PrintBig("BIKE_2", 1000, 4); //"bikers mission 2"
          Text.PrintNow("BIKE", 2000, 1);
          await asyncWait(80);
          $.flag_bikers_mission2_passed = 0;
          // START_NEW_SCRIPT bikers_mission2_loop
          $.bikers_contact_blip = Blip.AddSpriteForContactPoint($.bikersX, $.bikersY, $.bikersZ, $.the_biker_blip);
          goto_thereX = $.bikersX;
          goto_thereY = bikersY_d;
          goto_thereZ = $.bikersZ;
        }
        if (button_pressed_main == 37) {
          Text.PrintBig("BIKE_1", 1000, 4); //"bikers mission 1"
          Text.PrintNow("BIKE", 2000, 1);
          await asyncWait(80);
          $.flag_bikers_mission1_passed = 0;
          // START_NEW_SCRIPT bikers_mission1_loop
          $.bikers_contact_blip = Blip.AddSpriteForContactPoint($.bikersX, $.bikersY, $.bikersZ, $.the_biker_blip);
          goto_thereX = $.bikersX;
          goto_thereY = bikersY_d;
          goto_thereZ = $.bikersZ;
        }
        if (button_pressed_main == 36) {
          Text.PrintBig("FIN_1", 1000, 4); //"finale mission 2"
          Text.PrintNow("FIN", 2000, 1);
          await asyncWait(80);
          $.flag_finale_mission2_passed = 0;
          // START_NEW_SCRIPT finale_mission2_loop
          $.baron_contact_blip = Blip.AddSpriteForContactPoint(-378.3, -579.8, 24.5, RADAR_SPRITE_TOMMY);
          goto_thereX = $.baronX;
          goto_thereY = baronY_d;
          goto_thereZ = $.baronZ;
        }
        if (button_pressed_main == 35) {
          Text.PrintBig("CAP_1", 1000, 4); //"finale mission 1"
          Text.PrintNow("FIN", 2000, 1);
          await asyncWait(80);
          $.flag_finale_mission1_passed = 0;
          $.malibu_asset_acquired = 1;
          $.porn_asset_acquired = 1;
          $.icecream_asset_acquired = 1;
          $.taxifirm_asset_acquired = 1;
          $.boatyard_asset_acquired = 1;
          $.showroom_asset_acquired = 1;
          // START_NEW_SCRIPT finale_mission1_loop
          $.baron_contact_blip = Blip.AddSpriteForContactPoint($.counterX, $.counterY, $.counterZ, $.the_counter_blip);
          goto_thereX = $.counterX;
          goto_thereY = counterY_d;
          goto_thereZ = $.counterZ;
        }
        if (button_pressed_main == 34) {
          Text.PrintBig("CNT_2", 1000, 4); //"counter mission 2"
          Text.PrintNow("COUNT", 2000, 1);
          await asyncWait(80);
          $.flag_counter_mission2_passed = 0;
          // START_NEW_SCRIPT counter_mission2_loop
          $.counter_contact_blip = Blip.AddSpriteForContactPoint($.counterX, $.counterY, $.counterZ, $.the_counter_blip);
          goto_thereX = $.counterX;
          goto_thereY = counterY_d;
          goto_thereZ = $.counterZ;
        }
        if (button_pressed_main == 33) {
          Text.PrintBig("CNT_1", 1000, 4); //"counter mission 1"
          Text.PrintNow("COUNT", 2000, 1);
          await asyncWait(80);
          $.flag_counter_mission1_passed = 0;
          // START_NEW_SCRIPT counter_mission1_loop
          $.counter_contact_blip = Blip.AddSpriteForContactPoint($.counterX, $.counterY, $.counterZ, $.the_counter_blip);
          goto_thereX = $.counterX;
          goto_thereY = counterY_d;
          goto_thereZ = $.counterZ;
        }
        if (button_pressed_main == 32) {
          Text.PrintBig("BUD_3", 1000, 4); //"protect mission 3"
          Text.PrintNow("PROT", 2000, 1);
          await asyncWait(80);
          $.flag_protect_mission3_passed = 0;
          // START_NEW_SCRIPT protect_mission3_loop
          $.protect_contact_blip = Blip.AddSpriteForContactPoint(-348.5, -541.8, 16.4, RADAR_SPRITE_TOMMY);
          goto_thereX = $.baronX;
          goto_thereY = baronY_d;
          goto_thereZ = $.baronZ;
        }
        if (button_pressed_main == 31) {
          Text.PrintBig("BUD_2", 1000, 4); //"protect mission 2"
          Text.PrintNow("PROT", 2000, 1);
          await asyncWait(80);
          $.flag_protect_mission2_passed = 0;
          // START_NEW_SCRIPT protect_mission2_loop
          $.protect_contact_blip = Blip.AddSpriteForContactPoint(-397.4, -561.3, 18.7, RADAR_SPRITE_TOMMY);
          goto_thereX = $.baronX;
          goto_thereY = baronY_d;
          goto_thereZ = $.baronZ;
        }
        if (button_pressed_main == 30) {
          Text.PrintBig("BUD_1", 1000, 4); //"protect mission 1"
          Text.PrintNow("PROT", 2000, 1);
          await asyncWait(80);
          $.flag_protect_mission1_passed = 0;
          // START_NEW_SCRIPT protect_mission1_loop
          $.protect_contact_blip = Blip.AddSpriteForContactPoint(-378.3, -579.8, 24.5, RADAR_SPRITE_TOMMY);
          goto_thereX = $.baronX;
          goto_thereY = baronY_d;
          goto_thereZ = $.baronZ;
        }
        if (button_pressed_main == 29) {
          Text.PrintBig("PORN_4", 1000, 4); //"porn mission 4"
          Text.PrintNow("PORN", 2000, 1);
          await asyncWait(80);
          $.flag_porn_mission4_passed = 0;
          // START_NEW_SCRIPT porn_mission4_loop
          $.porn_contact_blip = Blip.AddSpriteForContactPoint($.pornX, $.pornY, $.pornZ, $.the_porn_blip);
          goto_thereX = $.pornX;
          goto_thereY = pornY_d;
          goto_thereZ = $.pornZ;
        }
        if (button_pressed_main == 28) {
          Text.PrintBig("PORN_3", 1000, 4); //"porn mission 3"
          Text.PrintNow("PORN", 2000, 1);
          await asyncWait(80);
          $.flag_porn_mission3_passed = 0;
          // START_NEW_SCRIPT porn_mission3_loop
          $.porn_contact_blip = Blip.AddSpriteForContactPoint($.pornX, $.pornY, $.pornZ, $.the_porn_blip);
          goto_thereX = $.pornX;
          goto_thereY = pornY_d;
          goto_thereZ = $.pornZ;
        }
        if (button_pressed_main == 27) {
          Text.PrintBig("PORN_2", 1000, 4); //"porn mission 2"
          Text.PrintNow("PORN", 2000, 1);
          await asyncWait(80);
          $.flag_porn_mission2_passed = 0;
          // START_NEW_SCRIPT porn_mission2_loop
          $.porn_contact_blip = Blip.AddSpriteForContactPoint($.pornX, $.pornY, $.pornZ, $.the_porn_blip);
          goto_thereX = $.pornX;
          goto_thereY = pornY_d;
          goto_thereZ = $.pornZ;
        }
        if (button_pressed_main == 26) {
          Text.PrintBig("PORN_1", 1000, 4); //"porn mission 1"
          Text.PrintNow("PORN", 2000, 1);
          await asyncWait(80);
          $.flag_porn_mission1_passed = 0;
          // START_NEW_SCRIPT porn_mission1_loop
          $.porn_contact_blip = Blip.AddSpriteForContactPoint($.pornX, $.pornY, $.pornZ, $.the_porn_blip);
          goto_thereX = $.pornX;
          goto_thereY = pornY_d;
          goto_thereZ = $.pornZ;
        }
        if (button_pressed_main == 25) {
          Text.PrintBig("PHIL_2", 1000, 4); //"phil mission 2"
          Text.PrintNow("PHIL", 2000, 1);
          await asyncWait(80);
          $.flag_phil_mission2_passed = 0;
          // START_NEW_SCRIPT phil_mission2_loop
          $.phil_contact_blip = Blip.AddSpriteForContactPoint($.philX, $.philY, $.philZ, $.the_phil_blip);
          goto_thereX = $.philX;
          goto_thereY = philY_d;
          goto_thereZ = $.philZ;
        }
        if (button_pressed_main == 24) {
          Text.PrintBig("PHIL_1", 1000, 4); //"phil mission 1"
          Text.PrintNow("PHIL", 2000, 1);
          await asyncWait(80);
          $.flag_phil_mission1_passed = 0;
          // START_NEW_SCRIPT phil_mission1_loop
          $.phil_contact_blip = Blip.AddSpriteForContactPoint($.philX, $.philY, $.philZ, $.the_phil_blip);
          goto_thereX = $.philX;
          goto_thereY = philY_d;
          goto_thereZ = $.philZ;
        }
        if (button_pressed_main == 23) {
          Text.PrintBig("BANK_4", 1000, 4); //"bankjob mission 4"
          Text.PrintNow("BANK", 2000, 1);
          await asyncWait(80);
          $.flag_bankjob_mission4_passed = 0;
          // START_NEW_SCRIPT bankjob_mission4_loop
          $.bankjob_contact_blip = Blip.AddSpriteForContactPoint($.bankjobX, $.bankjobY, $.bankjobZ, $.the_bankjob_blip);
          goto_thereX = 491.0;
          goto_thereY = -77.7;
          goto_thereZ = 10.4;
        }
        if (button_pressed_main == 22) {
          Text.PrintBig("BANK_3", 1000, 4); //"bankjob mission 3"
          Text.PrintNow("BANK", 2000, 1);
          await asyncWait(80);
          $.flag_bankjob_mission3_passed = 0;
          // START_NEW_SCRIPT bankjob_mission3_loop
          $.bankjob_contact_blip = Blip.AddSpriteForContactPoint($.bankjobX, $.bankjobY, $.bankjobZ, $.the_bankjob_blip);
          goto_thereX = 491.0;
          goto_thereY = -77.7;
          goto_thereZ = 10.4;
        }
        if (button_pressed_main == 21) {
          Text.PrintBig("BANK_2", 1000, 4); //"bankjob mission 2"
          Text.PrintNow("BANK", 2000, 1);
          await asyncWait(80);
          $.flag_bankjob_mission2_passed = 0;
          // START_NEW_SCRIPT bankjob_mission2_loop
          $.bankjob_contact_blip = Blip.AddSpriteForContactPoint($.bankjobX, $.bankjobY, $.bankjobZ, $.the_bankjob_blip);
          goto_thereX = 491.0;
          goto_thereY = -77.7;
          goto_thereZ = 10.4;
        }
        if (button_pressed_main == 20) {
          Text.PrintBig("BANK_1", 1000, 4); //"bankjob mission 1"
          Text.PrintNow("BANK", 2000, 1);
          await asyncWait(80);
          $.flag_bankjob_mission1_passed = 0;
          // START_NEW_SCRIPT bankjob_mission1_loop
          $.bankjob_contact_blip = Blip.AddSpriteForContactPoint($.bankjobX, $.bankjobY, $.bankjobZ, $.the_bankjob_blip);
          goto_thereX = 491.0;
          goto_thereY = -77.7;
          goto_thereZ = 10.4;
        }
        if (button_pressed_main == 19) {
          Text.PrintBig("TEX_2", 1000, 4); //"TEX mission 3"
          Text.PrintNow("AVERY", 2000, 1);
          await asyncWait(80);
          $.flag_sergio_mission3_passed = 0;
          // START_NEW_SCRIPT serg_mission3_loop
          $.sergio_contact_blip = Blip.AddSpriteForContactPoint($.sergiox, $.sergioy, $.sergioz, $.the_sergio_blip);
          goto_thereX = $.sergioX;
          goto_thereY = sergioY_d;
          goto_thereZ = $.sergioZ;
        }
        if (button_pressed_main == 18) {
          Text.PrintBig("TEX_3", 1000, 4); //"TEX mission 2"
          Text.PrintNow("AVERY", 2000, 1);
          await asyncWait(80);
          $.flag_sergio_mission2_passed = 0;
          // START_NEW_SCRIPT serg_mission2_loop
          $.sergio_contact_blip = Blip.AddSpriteForContactPoint($.sergiox, $.sergioy, $.sergioz, $.the_sergio_blip);
          goto_thereX = $.sergioX;
          goto_thereY = sergioY_d;
          goto_thereZ = $.sergioZ;
        }
        if (button_pressed_main == 17) {
          Text.PrintBig("TEX_1", 1000, 4); //"TEX mission 1"
          Text.PrintNow("AVERY", 2000, 1);
          await asyncWait(80);
          $.flag_sergio_mission1_passed = 0;
          // START_NEW_SCRIPT serg_mission1_loop
          $.sergio_contact_blip = Blip.AddSpriteForContactPoint($.sergiox, $.sergioy, $.sergioz, $.the_sergio_blip);
          goto_thereX = $.sergioX;
          goto_thereY = sergioY_d;
          goto_thereZ = $.sergioZ;
        }
        if (button_pressed_main == 16) {
          Text.PrintBig("ASS_1", 1000, 4); //"baron mission 5"
          Text.PrintNow("COKE", 2000, 1);
          await asyncWait(80);
          $.flag_baron_mission5_passed = 0;
          // START_NEW_SCRIPT baron_mission5_loop
          $.baron_contact_blip = Blip.AddSpriteForContactPoint($.baron2X, $.baron2Y, $.baron2Z, 7);
          goto_thereX = $.baron2X;
          goto_thereY = baron2Y_d;
          goto_thereZ = $.baron2Z;
        }
        if (button_pressed_main == 15) {
          Text.PrintBig("KENT_1", 1000, 4); //"Kent paul 1"
          Text.PrintNow("KENT", 2000, 1);
          await asyncWait(80);
          $.flag_kent_mission1_passed = 0;
          $.flag_kent_mission_active = 1;
          // START_NEW_SCRIPT kent_mission1_loop
          $.kent_contact_blip = Blip.AddSpriteForContactPoint(491.0, -77.7, 10.4, $.the_kent_blip);
          goto_thereX = 495.60;
          goto_thereY = -82.80;
          goto_thereZ = 9.03;
        }
        if (button_pressed_main == 14) {
          Text.PrintBig("COK_4", 1000, 4); //"baron mission 4"
          Text.PrintNow("COKE", 2000, 1);
          await asyncWait(80);
          $.flag_baron_mission4_passed = 0;
          // START_NEW_SCRIPT baron_mission4_loop
          $.baron_contact_blip = Blip.AddSpriteForContactPoint($.baronX, $.baronY, $.baronZ, $.the_baron_blip);
          goto_thereX = $.baronX;
          goto_thereY = baronY_d;
          goto_thereZ = $.baronZ;
        }
        if (button_pressed_main == 13) {
          Text.PrintBig("COK_3", 1000, 4); //"baron mission 3"
          Text.PrintNow("COKE", 2000, 1);
          await asyncWait(80);
          $.flag_baron_mission3_passed = 0;
          // START_NEW_SCRIPT baron_mission3_loop
          $.baron_contact_blip = Blip.AddSpriteForContactPoint($.baronX, $.baronY, $.baronZ, $.the_baron_blip);
          goto_thereX = $.baronX;
          goto_thereY = baronY_d;
          goto_thereZ = $.baronZ;
        }
        if (button_pressed_main == 12) {
          Text.PrintBig("COK_2", 1000, 4); //"baron mission 2"
          Text.PrintNow("COKE", 2000, 1);
          await asyncWait(80);
          $.flag_baron_mission2_passed = 0;
          // START_NEW_SCRIPT baron_mission2_loop
          $.baron_contact_blip = Blip.AddSpriteForContactPoint($.baronX, $.baronY, $.baronZ, $.the_baron_blip);
          goto_thereX = $.baronX;
          goto_thereY = baronY_d;
          goto_thereZ = $.baronZ;
        }
        if (button_pressed_main == 11) {
          Text.PrintBig("COK_1", 1000, 4); //"baron mission 1"
          Text.PrintNow("COKE", 2000, 1);
          await asyncWait(80);
          $.flag_baron_mission1_passed = 0;
          // START_NEW_SCRIPT baron_mission1_loop
          $.baron_contact_blip = Blip.AddSpriteForContactPoint($.baronX, $.baronY, $.baronZ, $.the_baron_blip);
          goto_thereX = $.baronX;
          goto_thereY = baronY_d;
          goto_thereZ = $.baronZ;
        }
        if (button_pressed_main == 10) {
          Text.PrintBig("COL_5", 1000, 4); //"General mission 5"
          Text.PrintNow("GENERAL", 2000, 1);
          await asyncWait(80);
          // START_NEW_SCRIPT general_mission5_loop
          $.general_contact_blip = Blip.AddSpriteForContactPoint($.generalX, $.generalY, $.generalZ, $.the_general_blip);
          goto_thereX = $.generalX;
          goto_thereY = generalY_d;
          goto_thereZ = $.generalZ;
        }
        if (button_pressed_main == 9) {
          Text.PrintBig("COL_4", 1000, 4); //"General mission 4"
          Text.PrintNow("GENERAL", 2000, 1);
          await asyncWait(80);
          $.flag_general_mission4_passed = 0;
          // START_NEW_SCRIPT general_mission4_loop
          $.general_contact_blip = Blip.AddSpriteForContactPoint($.generalX, $.generalY, $.generalZ, $.the_general_blip);
          goto_thereX = $.generalX;
          goto_thereY = generalY_d;
          goto_thereZ = $.generalZ;
        }
        if (button_pressed_main == 8) {
          Text.PrintBig("COL_3", 1000, 4); //"General mission 3"
          Text.PrintNow("GENERAL", 2000, 1);
          await asyncWait(80);
          $.flag_general_mission3_passed = 0;
          // START_NEW_SCRIPT general_mission3_loop
          $.general_contact_blip = Blip.AddSpriteForContactPoint($.generalX, $.generalY, $.generalZ, $.the_general_blip);
          goto_thereX = $.generalX;
          goto_thereY = generalY_d;
          goto_thereZ = $.generalZ;
        }
        if (button_pressed_main == 7) {
          Text.PrintBig("COL_2", 1000, 4); //"General mission 2"
          Text.PrintNow("GENERAL", 2000, 1);
          await asyncWait(80);
          $.flag_general_mission2_passed = 0;
          // START_NEW_SCRIPT general_mission2_loop
          $.general_contact_blip = Blip.AddSpriteForContactPoint($.generalX, $.generalY, $.generalZ, $.the_general_blip);
          goto_thereX = $.generalX;
          goto_thereY = generalY_d;
          goto_thereZ = $.generalZ;
        }
        if (button_pressed_main == 6) {
          Text.PrintBig("COL_1", 1000, 4); //"General mission 1"
          Text.PrintNow("GENERAL", 2000, 1);
          await asyncWait(80);
          $.flag_general_mission1_passed = 0;
          // START_NEW_SCRIPT general_mission1_loop
          $.general_contact_blip = Blip.AddSpriteForContactPoint($.generalX, $.generalY, $.generalZ, $.the_general_blip);
          goto_thereX = $.generalX;
          goto_thereY = generalY_d;
          goto_thereZ = $.generalZ;
        }
        if (button_pressed_main == 5) {
          Text.PrintBig("LAW_4", 1000, 4); //"lawyer mission 4"
          Text.PrintNow("LAW", 2000, 1);
          await asyncWait(80);
          $.flag_lawyer_mission4_passed = 0;
          // START_NEW_SCRIPT lawyer_mission4_loop
          $.lawyer_contact_blip = Blip.AddSpriteForContactPoint($.lawyerX, $.lawyerY, $.lawyerZ, $.the_lawyer_blip);
          goto_thereX = lawyerX_d;
          goto_thereY = $.lawyerY;
          goto_thereZ = $.lawyerZ;
        }
        if (button_pressed_main == 4) {
          Text.PrintBig("LAW_3", 1000, 4); //"lawyer mission 3"
          Text.PrintNow("LAW", 2000, 1);
          await asyncWait(80);
          $.flag_lawyer_mission3_passed = 0;
          // START_NEW_SCRIPT lawyer_mission3_loop
          $.lawyer_contact_blip = Blip.AddSpriteForContactPoint($.lawyerX, $.lawyerY, $.lawyerZ, $.the_lawyer_blip);
          goto_thereX = lawyerX_d;
          goto_thereY = $.lawyerY;
          goto_thereZ = $.lawyerZ;
        }
        if (button_pressed_main == 3) {
          Text.PrintBig("LAW_2", 1000, 4); //"lawyer mission 2"
          Text.PrintNow("LAW", 2000, 1);
          await asyncWait(80);
          $.flag_lawyer_mission2_passed = 0;
          // START_NEW_SCRIPT lawyer_mission2_loop
          $.lawyer_contact_blip = Blip.AddSpriteForContactPoint($.lawyerX, $.lawyerY, $.lawyerZ, $.the_lawyer_blip);
          goto_thereX = lawyerX_d;
          goto_thereY = $.lawyerY;
          goto_thereZ = $.lawyerZ;
        }
        if (button_pressed_main == 2) {
          Text.PrintBig("LAW_1", 1000, 4); //"lawyer mission 1"
          Text.PrintNow("LAW", 2000, 1);
          await asyncWait(80);
          $.flag_lawyer_mission1_passed = 0;
          // START_NEW_SCRIPT lawyer_mission1_loop
          $.lawyer_contact_blip = Blip.AddSpriteForContactPoint($.lawyerX, $.lawyerY, $.lawyerZ, $.the_lawyer_blip);
          goto_thereX = lawyerX_d;
          goto_thereY = $.lawyerY;
          goto_thereZ = $.lawyerZ;
        }
        if (button_pressed_main == 1) {
          Text.PrintBig("INT_B", 1000, 4); //"Hotel cut scene"
          Text.PrintNow("CUT", 2000, 1);
          await asyncWait(80);
          $.flag_hotel_mission1_passed = 0;
          // START_NEW_SCRIPT hotel_mission1_loop
          goto_thereX = hotelX_d;
          goto_thereY = $.hotelY;
          goto_thereZ = $.hotelZ;
        }



      }
    }
    if (Pad.IsButtonPressed(1 /* PAD2 */, 19 /* RIGHTSHOCK */)) {
      await load_and_warp_player();  // SCM GOSUB load_and_warp_player
    }


  }


  // SCM GOTO → mission_start_debug (not lowered; manual jump required)
  throw new Error("unresolved GOTO mission_start_debug"); // fallback: would break linear control flow


  // MissionBoundary




}



async function load_and_warp_player() {


  if ($.player1.isPlaying()) {
    Streaming.SetAreaVisible(VIS_MAIN_MAP);
    Streaming.LoadScene(goto_thereX, goto_thereY, goto_thereZ);
    $.player1.setCoordinates(goto_thereX, goto_thereY, goto_thereZ);
  }

  //WHILE IS_BUTTON_PRESSED PAD2 CROSS
  //	WAIT 0

  //ENDWHILE


  if (button_pressed_main == 59 && test_heli1_created == 0) {
    Streaming.RequestModel(sparrow);
    Streaming.LoadAllModelsNow();
    test_heli1 = Car.Create(sparrow, $.heli1X, $.heli1Y, $.heli1Z);
    Streaming.MarkModelAsNoLongerNeeded(sparrow);
    test_heli1.markAsNoLongerNeeded();
    test_heli1_created = 1;
  }
}





async function terminate_all_scripts() {


  // TERMINATE_ALL_SCRIPTS_WITH_THIS_NAME("HOT");
  // TERMINATE_ALL_SCRIPTS_WITH_THIS_NAME("LAW1");
  // TERMINATE_ALL_SCRIPTS_WITH_THIS_NAME("LAW2");
  // TERMINATE_ALL_SCRIPTS_WITH_THIS_NAME("LAW3");
  // TERMINATE_ALL_SCRIPTS_WITH_THIS_NAME("LAW4");
  // TERMINATE_ALL_SCRIPTS_WITH_THIS_NAME("KEN1");
  // TERMINATE_ALL_SCRIPTS_WITH_THIS_NAME("GEN1");
  // TERMINATE_ALL_SCRIPTS_WITH_THIS_NAME("GEN2");
  // TERMINATE_ALL_SCRIPTS_WITH_THIS_NAME("GEN3");
  // TERMINATE_ALL_SCRIPTS_WITH_THIS_NAME("GEN4");
  // TERMINATE_ALL_SCRIPTS_WITH_THIS_NAME("GEN5");
  // TERMINATE_ALL_SCRIPTS_WITH_THIS_NAME("BAR1");
  // TERMINATE_ALL_SCRIPTS_WITH_THIS_NAME("BAR2");
  // TERMINATE_ALL_SCRIPTS_WITH_THIS_NAME("BAR3");
  // TERMINATE_ALL_SCRIPTS_WITH_THIS_NAME("BAR4");
  // TERMINATE_ALL_SCRIPTS_WITH_THIS_NAME("BAR5");
  // TERMINATE_ALL_SCRIPTS_WITH_THIS_NAME("SER1");
  // TERMINATE_ALL_SCRIPTS_WITH_THIS_NAME("SER2");
  // TERMINATE_ALL_SCRIPTS_WITH_THIS_NAME("SER3");
  // TERMINATE_ALL_SCRIPTS_WITH_THIS_NAME("BANK1");
  // TERMINATE_ALL_SCRIPTS_WITH_THIS_NAME("BANK2");
  // TERMINATE_ALL_SCRIPTS_WITH_THIS_NAME("BANK3");
  // TERMINATE_ALL_SCRIPTS_WITH_THIS_NAME("BANK4");
  // TERMINATE_ALL_SCRIPTS_WITH_THIS_NAME("PHI1");
  // TERMINATE_ALL_SCRIPTS_WITH_THIS_NAME("PHI2");
  // TERMINATE_ALL_SCRIPTS_WITH_THIS_NAME("PORN1");
  // TERMINATE_ALL_SCRIPTS_WITH_THIS_NAME("PORN2");
  // TERMINATE_ALL_SCRIPTS_WITH_THIS_NAME("PORN3");
  // TERMINATE_ALL_SCRIPTS_WITH_THIS_NAME("PORN4");
  // TERMINATE_ALL_SCRIPTS_WITH_THIS_NAME("PRO1");
  // TERMINATE_ALL_SCRIPTS_WITH_THIS_NAME("PRO2");
  // TERMINATE_ALL_SCRIPTS_WITH_THIS_NAME("PRO3");
  // TERMINATE_ALL_SCRIPTS_WITH_THIS_NAME("COU1");
  // TERMINATE_ALL_SCRIPTS_WITH_THIS_NAME("COU2");
  // TERMINATE_ALL_SCRIPTS_WITH_THIS_NAME("FIN1");
  // TERMINATE_ALL_SCRIPTS_WITH_THIS_NAME("FIN2");
  // TERMINATE_ALL_SCRIPTS_WITH_THIS_NAME("BIK1");
  // TERMINATE_ALL_SCRIPTS_WITH_THIS_NAME("BIK2");
  // TERMINATE_ALL_SCRIPTS_WITH_THIS_NAME("BIK3");
  // TERMINATE_ALL_SCRIPTS_WITH_THIS_NAME("ROC1");
  // TERMINATE_ALL_SCRIPTS_WITH_THIS_NAME("ROC2");
  // TERMINATE_ALL_SCRIPTS_WITH_THIS_NAME("ROC3");
  // TERMINATE_ALL_SCRIPTS_WITH_THIS_NAME("ROC4");
  // TERMINATE_ALL_SCRIPTS_WITH_THIS_NAME("CUB1");
  // TERMINATE_ALL_SCRIPTS_WITH_THIS_NAME("CUB2");
  // TERMINATE_ALL_SCRIPTS_WITH_THIS_NAME("CUB3");
  // TERMINATE_ALL_SCRIPTS_WITH_THIS_NAME("CUB4");
  // TERMINATE_ALL_SCRIPTS_WITH_THIS_NAME("HAT1");
  // TERMINATE_ALL_SCRIPTS_WITH_THIS_NAME("HAT2");
  // TERMINATE_ALL_SCRIPTS_WITH_THIS_NAME("HAT3");
  // TERMINATE_ALL_SCRIPTS_WITH_THIS_NAME("ASSIN_1");
  // TERMINATE_ALL_SCRIPTS_WITH_THIS_NAME("ASSIN_2");
  // TERMINATE_ALL_SCRIPTS_WITH_THIS_NAME("ASSIN_3");
  // TERMINATE_ALL_SCRIPTS_WITH_THIS_NAME("ASSIN_4");
  // TERMINATE_ALL_SCRIPTS_WITH_THIS_NAME("ASSIN_5");
  // TERMINATE_ALL_SCRIPTS_WITH_THIS_NAME("TWAR1");
  // TERMINATE_ALL_SCRIPTS_WITH_THIS_NAME("TWAR2");
  // TERMINATE_ALL_SCRIPTS_WITH_THIS_NAME("TWAR3");
  // TERMINATE_ALL_SCRIPTS_WITH_THIS_NAME("HELI1");
  // TERMINATE_ALL_SCRIPTS_WITH_THIS_NAME("BOATBUY");
  // TERMINATE_ALL_SCRIPTS_WITH_THIS_NAME("TAXIBUY");
  // TERMINATE_ALL_SCRIPTS_WITH_THIS_NAME("ICEBUY");
  // TERMINATE_ALL_SCRIPTS_WITH_THIS_NAME("CARBUY");


  $.flag_kent_mission_active = 0;
  $.flag_open_mansion = 2;

  //REMOVE_BLIP	hotel_contact_blip

  $.lawyer_contact_blip.remove();
  $.kent_contact_blip.remove();
  $.general_contact_blip.remove();
  $.baron_contact_blip.remove();
  $.sergio_contact_blip.remove();
  $.bankjob_contact_blip.remove();
  $.phil_contact_blip.remove();
  $.porn_contact_blip.remove();
  $.protect_contact_blip.remove();
  $.counter_contact_blip.remove();
  $.bikers_contact_blip.remove();
  $.rock_contact_blip.remove();
  $.cuban_contact_blip.remove();
  $.haitian_contact_blip.remove();
  $.assasin_contact_blip.remove();
  $.taxiwar_contact_blip.remove();
  $.taxibuy_pickup.remove();
  $.goto_hotel_contact_blip.remove();


  if ($.switch_off_starfish_gates == 0) {
    Game.SetMaxWantedLevel(6);
    Path.SwitchPedRoadsOn(-787.8, -519.4, 10.0, -657.5, -475.2, 20.0); // Star Island gates mainland
    Path.SwitchPedRoadsOn(-230.0, -464.5, 10.0, 56.85, -459.8, 20.0); // Star Island gates ocean beach
    Path.SwitchPedRoadsOn(-99.8, 1041.9, 0.0, -129.0, 1097.4, 30.0); //  porn island road block
    Path.SwitchPedRoadsOn(-214.6, -948.8, 0.0, -258.7, -920.6, 30.0); //  South road block
    Path.SwitchPedRoadsOn(162.0, 245.0, 18.0, 166.0, 250.0, 25.0); //  Golf course road block
    Path.SwitchPedRoadsOn(59.0, 198.5, 18.0, 51.0, 200.0, 25.0); //  Golf course road block
    Path.SwitchRoadsOn(-787.8, -519.4, 10.0, -657.5, -475.2, 20.0); // Star Island gates	mainland
    Path.SwitchRoadsOn(-230.0, -464.5, 10.0, 165.85, -459.8, 20.0); // Star Island gates ocean beach
    Path.SwitchRoadsOn(-99.8, 1041.9, 0.0, -129.0, 1097.4, 30.0); // porn island road block
    Path.SwitchRoadsOn(-214.6, -948.8, 0.0, -258.7, -920.6, 30.0); //  South road block
    Path.SwitchRoadsOn(162.0, 245.0, 18.0, 166.0, 250.0, 25.0); // Golf Club
    Path.SwitchRoadsOn(59.0, 198.5, 18.0, 51.0, 200.0, 25.0); // Golf Club
    $.star_gate_1.delete();
    $.star_gate_2.delete();
    $.porn_roadblock.delete();
    $.south_roadblock.delete();
    $.golf_roadblock.delete();
    $.star_gate_1 = ScriptObject.CreateNoOffset(comgate1open, -715.042, -489.0, 12.615);
    //SET_OBJECT_HEADING star_gate_1 3.0
    $.star_gate_1.dontRemove();
    $.star_gate_2 = ScriptObject.CreateNoOffset(comgate2open, -181.402, -472.859, 12.65);
    //SET_OBJECT_HEADING star_gate_2 12.5
    $.star_gate_2.dontRemove();
    $.mansion_doors.delete();
    $.porn_north_gate_closed.delete();
    $.jetty_door_closed.delete();
    $.taxi_closed.delete();
    $.boat_closed.delete();
    //DELETE_OBJECT boat_closed
    $.switch_off_starfish_gates = 1;
  }


  if (Pad.IsButtonPressed(1 /* PAD2 */, 16 /* CROSS */)) {
    if (open_up_the_property_pickups == 0) {
      $.print_works_pickup.remove();
      $.print_works_blip = Blip.AddShortRangeSpriteForContactPoint($.printbuyX, $.printbuyY, $.printbuyZ, RADAR_SPRITE_PROPERTY);
      $.print_works_blip.changeDisplay(2 /* BLIP_ONLY */);
      $.print_works_pickup = Pickup.CreateForSaleProperty($.printbuyX, $.printbuyY, $.printbuyZ, $.printworks_price, "PRNT_L"); //Press R3 to purchase the Print Works for $~1~
      // START_NEW_SCRIPT print_buy_loop
      //CAR SHOWROOM PURCHASING PICKUP
      $.carbuy_pickup.remove();
      $.carbuy_blip = Blip.AddShortRangeSpriteForContactPoint($.carbuyX, $.carbuyY, $.carbuyZ, RADAR_SPRITE_PROPERTY);
      $.carbuy_blip.changeDisplay(2 /* BLIP_ONLY */);
      $.carbuy_pickup = Pickup.CreateForSaleProperty($.carbuyX, $.carbuyY, $.carbuyZ, $.carbuy_price, "CAR_L"); //Press R3 to purchase the Car Showroom for $~1~
      //FILM STUDIO PURCHASING PICKUP
      $.pornbuy_pickup.remove();
      $.pornbuy_blip = Blip.AddShortRangeSpriteForContactPoint($.pornbuyX, $.pornbuyY, $.pornbuyZ, RADAR_SPRITE_PROPERTY);
      $.pornbuy_blip.changeDisplay(2 /* BLIP_ONLY */);
      $.pornbuy_pickup = Pickup.CreateForSaleProperty($.pornbuyX, $.pornbuyY, $.pornbuyZ, $.pornbuy_price, "PORN_L"); //Press R3 to purchase the Film Studios for $~1~
      // START_NEW_SCRIPT pornbuy_loop
      //ICECREAM FACTORY PURCHASING PICKUP
      $.icebuy_pickup.remove();
      $.icebuy_blip = Blip.AddShortRangeSpriteForContactPoint($.icebuyX, $.icebuyY, $.icebuyZ, RADAR_SPRITE_PROPERTY);
      $.icebuy_blip.changeDisplay(2 /* BLIP_ONLY */);
      $.icebuy_pickup = Pickup.CreateForSaleProperty($.icebuyX, $.icebuyY, $.icebuyZ, $.icebuy_price, "ICE_L"); //Press R3 to purchase the Icecream Factory for $~1~
      //TAXI FIRM PURCHASING PICKUP
      $.taxibuy_pickup.remove();
      $.taxibuy_blip = Blip.AddShortRangeSpriteForContactPoint($.taxibuyX, $.taxibuyY, $.taxibuyZ, RADAR_SPRITE_PROPERTY);
      $.taxibuy_blip.changeDisplay(2 /* BLIP_ONLY */);
      $.taxibuy_pickup = Pickup.CreateForSaleProperty($.taxibuyX, $.taxibuyY, $.taxibuyZ, $.taxibuy_price, "TAXI_L"); //Press R3 to purchase the Taxi Company for $~1~
      //THE MALIBU PURCHASING PICKUP
      $.bankbuy_pickup.remove();
      $.bankbuy_blip = Blip.AddShortRangeSpriteForContactPoint($.bankbuyX, $.bankbuyY, $.bankbuyZ, RADAR_SPRITE_PROPERTY);
      $.bankbuy_blip.changeDisplay(2 /* BLIP_ONLY */);
      $.bankbuy_pickup = Pickup.CreateForSaleProperty($.bankbuyX, $.bankbuyY, $.bankbuyZ, $.bankbuy_price, "BANK_L"); //Press R3 to purchase The Malibu for $~1~
      // START_NEW_SCRIPT bankbuy_loop
      //BOAT YARD PURCHASING PICKUP
      $.boatbuy_pickup.remove();
      $.boatbuy_blip = Blip.AddShortRangeSpriteForContactPoint($.boatbuyX, $.boatbuyY, $.boatbuyZ, RADAR_SPRITE_PROPERTY);
      $.boatbuy_blip.changeDisplay(2 /* BLIP_ONLY */);
      $.boatbuy_pickup = Pickup.CreateForSaleProperty($.boatbuyX, $.boatbuyY, $.boatbuyZ, $.boatbuy_price, "BOAT_L"); //Press R3 to purchase the Boat Yard for $~1~
      //STRIP CLUB PURCHASING PICKUP
      $.strpbuy_pickup.remove();
      $.strpbuy_pickup = Pickup.CreateForSaleProperty($.strpbuyX, $.strpbuyY, $.strpbuyZ, $.strpbuy_price, "STRP_L"); //Press R3 to purchase the Car Showroom for $~1~
      $.strpbuy_blip = Blip.AddShortRangeSpriteForContactPoint($.strpbuyX, $.strpbuyY, $.strpbuyZ, RADAR_SPRITE_PROPERTY);
      $.strpbuy_blip.changeDisplay(2 /* BLIP_ONLY */);
      // START_NEW_SCRIPT strpbuy_loop
      open_up_the_property_pickups = 1;
    }
    // START_NEW_SCRIPT icebuy_loop
    // START_NEW_SCRIPT taxibuy_loop
    // START_NEW_SCRIPT boatbuy_loop
    // START_NEW_SCRIPT property_car_loop
  }
}

export async function debug() {
  // MissionBoundary


  // VAR_FLOAT x_float_m y_float_m z_float_m text_x text_y text_z text_h player_heading_debug debug_car_heading
  // VAR_FLOAT dbcam_x dbcam_y dbcam_z
  // VAR_INT carcolour_flag1 carcolour_flag2 carcolour_counter1 carcolour_counter2 carcolour_timer1 carcolour_timer2
  // VAR_INT magic_car button_press_flag car_colour car_colour2 intro_explosion_flag players_debug_car
  // VAR_INT flag_create_car initial_create_car initial_car_selected initial_pickup_selected
  // VAR_INT counter_create_car colour_counter cheat_mode_on_flag cheat_mode_on open_up_the_property_pickups
  // VAR_INT button_pressed_warp button_pressed_warp_odd button_pressed_main relative_button_press
  // VAR_INT repeat_button_press text_button_pressed players_car_debug initial_pickup debug_active
  // VAR_INT debug_crap_on crap_press_flag no_cars repeat_butt_press test_heli1_blip print_stuff_button print_stuff_counter
  // VAR_INT counter_create_pickup flag_create_pickup magic_pickup test_heli1 test_heli1_created
  // VAR_INT weather_crap add_just_the_once_though invulnerability_on button_press_flag_pickup debug_game_timer
  // VAR_FLOAT hotelX_d lawyerX_d generalY_d baronY_d sergioY_d bankjobY_d pornY_d protectY_d counterY_d bikersY_d
  // VAR_FLOAT cubanY_d haitianY_d darkelY_d rockY_d rockX_d taxiwarY_d philY_d baron2Y_d kentX_d
  // VAR_FLOAT goto_thereX goto_thereY goto_thereZ heli1Y_d
  // VAR_FLOAT corona_x corona_y corona_z stunt_jump_debug_X stunt_jump_debug_Y stunt_jump_debug_Z
  // VAR_INT onscreen_4 onscreen_1 onscreen_2 onscreen_3 is_stunt_jump_debug is_rightshock_pressed
  // VAR_FLOAT RStickX_F RStickY_F


  relative_button_press = 0;
  initial_create_car = 0;
  counter_create_car = landstal;
  counter_create_pickup = brassknuckle;
  button_pressed_warp = 0;
  button_pressed_main = 0;
  cheat_mode_on_flag = 2;
  cheat_mode_on = 1;
  weather_crap = 0;
  add_just_the_once_though = 0;
  button_pressed_warp_odd = 0;
  test_heli1_created = 0;
  initial_pickup = 0;
  initial_pickup_selected = 0;
  print_stuff_button = 0;
  print_stuff_counter = 0;
  carcolour_flag1 = 0;
  carcolour_flag2 = 0;
  carcolour_counter1 = 0;
  carcolour_counter2 = 0;
  is_stunt_jump_debug = 0;
  is_rightshock_pressed = 0;


  hotelX_d = $.hotelX + 3.0;
  lawyerX_d = $.lawyerX - 5.0;
  generalY_d = $.generalY + 2.4;
  baronY_d = $.baronY + 3.0;
  sergioY_d = $.sergioY + 3.0;
  bankjobY_d = $.bankjobY - 3.0;
  pornY_d = $.pornY + 3.0;
  counterY_d = $.counterY + 3.0;
  bikersY_d = $.bikersY + 3.0;
  cubanY_d = $.cubanY + 3.0;
  haitianY_d = $.haitianY + 3.0;
  rockY_d = $.rockY + 3.0;
  rockX_d = $.rockX + 2.0;
  taxiwarY_d = $.taxiwarY + 3.0;
  philY_d = $.philY + 3.0;
  baron2Y_d = $.baron2Y + 3.0;
  heli1Y_d = $.heli1Y + 5.0;
  kentX_d = $.kentX + 4.0;


  corona_x = 10.0;
  corona_y = 10.0;
  corona_z = 10.0;


  goto_thereX = lawyerX_d;
  goto_thereY = $.lawyerY;
  goto_thereZ = $.lawyerZ;


  // SCRIPT_NAME debug


  debug_active = 1;


  // SET_DEATHARREST_STATE(false /* OFF */);


  // SCM GOTO → delete_gates (not lowered; manual jump required)
  throw new Error("unresolved GOTO delete_gates"); // fallback: would break linear control flow


  $.star_gate_1 = ScriptObject.CreateNoOffset(comgate1closed, -181.169, -472.842, 12.092);
  $.star_gate_2 = ScriptObject.CreateNoOffset(comgate2closed, -715.225, -490.016, 12.092);
  $.porn_roadblock = ScriptObject.CreateNoOffset(nt_roadblockCI, 237.114, 961.495, 27.221);
  $.south_roadblock = ScriptObject.CreateNoOffset(wsh_roadblock, -242.671, -935.667, 16.198);
  $.golf_roadblock = ScriptObject.CreateNoOffset(nt_roadblockGF, 213.42, 245.061, 17.168);
  $.mansion_doors = ScriptObject.CreateNoOffset(mansion_new_doors, -391.19, -575.906, 24.071);
  $.jetty_door_closed = ScriptObject.CreateNoOffset(ci_jetygatesclosed, -116.738, 1027.729, 11.34);
  $.taxi_closed = ScriptObject.CreateNoOffset(haitaxidr, -1010.466, 199.125, 11.95);
  $.boat_closed = ScriptObject.CreateNoOffset(b_hse_doors, -640.012, -1485.941, 15.457);


}
