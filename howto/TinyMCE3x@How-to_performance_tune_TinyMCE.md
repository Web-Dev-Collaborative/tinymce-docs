---
layout: default
title: Performance tune TinyMCE
---

This page contains some ways to boost over all performance of TinyMCE by reconfiguration.

Warning: We are focusing on raw performance here and some options might produce strange unwanted results. So don't whine if some unexpected results happen. These actions are not recommended for novice users of TinyMCE.

## Optimizing initialization speed

Here are some actions to take to boost initialization/loading time of TinyMCE.

Use and install the [TinyMCE Compressor](https://www.tinymce.com/docs-3x/compressor/about/).
This will bundle all JavaScript HTTP requests into one big request and also gzip compress them by 75%.

Enable the button_tile_map option (should be enabled by default if you have a newer version of TinyMCE).
This makes the icons load faster since multiple image requests are replaced with a few tilemap requests.

Compress other scripts using the custom scripts option inside the compressor.
There might be other third party scripts on the same page. These can be added to the compressor as well.

Disable plugins that you don't need.
Remember to both remove them from the tinyMCE.init and the tinyMCE_GZ.init calls.

## Optimizing cleanup/save

Here are some actions to take to boost cleanup/saving time of TinyMCE.

Set the [entity_encoding](https://www.tinymce.com/docs-3x/reference/configuration/Configuration3x@entity_encoding/) option to "raw".
Since the default option uses a lookup table for all entities it's kind of slow. Switching to raw will skip entity encoding on everything but the essentials.

Set the [verify_html](https://www.tinymce.com/docs-3x/reference/configuration/Configuration3x@verify_html/) to false.
This will switch the cleanup method to another but also enable all elements and attributes in output. **You might need to add some form of server side cleanup.**

## Other cleanup options

These options are not recommended, they will disable any of the above cleanup/save optimizations, use as last resort only, or if you know what you are doing.

Switch to the somewhat experimental XML serializer by setting cleanup_serializer to "xml".
This will switch the serialization engine to one based on a XML document DOM tree. Sometimes this is a lot faster but most of the cleanup options doesn't apply to this engine. It will always produce a parsable XML output.

Disable the cleanup by setting [cleanup](https://www.tinymce.com/docs-3x/reference/configuration/Configuration3x@cleanup/) option to false.
This will make it faster to save but IE will produce invalid HTML code. So you should clean that up by using some other method like a server side Tidy cleanup or [HTML Purifier](http://htmlpurifier.org/).