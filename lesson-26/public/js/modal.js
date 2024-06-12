//public/js/modal.js

"use strict";

const { $where } = require("../../models/Talk");

/**
 * Kustubg 26.6 (p.388)
 */

$(document).ready(() => {
    $("#modal-button").click(() => {
        $(".modal-body").html(""); //modal내용 다 지우기

        $.get("/courses?format=json", (data) => {
            data.forEach(course => {
                $(".modal-body").append(
                    `<div>
                        <h5 class="course-title">${course.title}</h5>
                        <p class="course-description">${course.description}</p>
                        <p> <a herf="/courses/${course._id}">View Course</a></p>
                        <button class="btn btn-info" data-id="${course._id}">Join</button>
                    </div>`
                );
            });
        });
    })
});