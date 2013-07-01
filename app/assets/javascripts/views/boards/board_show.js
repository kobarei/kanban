Kanban.Views.BoardShow = Backbone.View.extend({
  template: JST['boards/show'],
  tagName: "section",
  className: "boards-show",

  events: {
    "click div.card": "cardClick"
  },

  cardClick: function (event) {
    var id = parseInt($(event.target).data("id"));
    console.log("card click: " + id)
    event.stopPropagation();
  },

  render: function () {
    var that = this;

    var board = that.model;
    var lists = that.model.lists();

    var renderedContent = that.template({
      board: board,
      lists: lists,
    });

    that.$el.html(renderedContent);
    return that;
  }

});
