# Javascript Groupon API Wrapper

A quick way to access the Groupon API via Javascript. You can read the [API docs here](http://sites.google.com/site/grouponapi/home) for more details, but essentially the API gives access to Groupon's Deal of the Day. There are three ways to do this:

## Automagically (by user's IP geolocation)

    Groupon.getDeals(function(deals){
      //these deals are automatically the ones closest to current user
      console.log(deals);
    })

## By City

    Groupon.getDeals('chicago', function(deals){
      console.log(deals);
    })

## By Geo Object

An object that has latitude and longitude properties

    Groupon.getDeals({latitude: 41.8825, longitude: -87.6441}, function(deals){
      console.log(deals);
    })

You may also find it useful to retrieve a list of cities that are available on Groupon. 

    Groupon.getCities(function(cities){
      console.log(cities);
    })

The cities JSON response includes name, id, latitude, longitude and timezone:

    name: "Albuquerque"
    location: {
      latitude: 35.0845
      timezone_offset_gmt: -25200
      timezone: "Mountain Time (US & Canada)"
      longitude: -106.651
    }
    id: "albuquerque"

## TODO
  * Finish/write tests
  * Add more fine-grained mapping capabilities for deals
  * Fail gracefully in case of API outages
  * Wrap all methods of API
  * Simple cacheing

## License 

(The MIT License)

Copyright (c) 2010 Keith Norman <keithn@groupon.com>

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.