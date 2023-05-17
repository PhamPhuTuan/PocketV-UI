export default {
  seenRecord(context, payload) {
    context.commit("seenRecord", payload.item);
  },
  approved(context, payload) {
    context.commit("approved", payload.item);
  },
  ban(context, payload) {
    context.commit("ban", payload.item);
  },
  deletePostApproved(context, payload) {
    context.commit("deletePostApproved", payload.item);
  },
  deletePostwtbApproved(context, payload) {
    context.commit("deletePostwtbApproved", payload.item);
  },
  deleteRecord(context, payload) {
    context.commit("deleteRecord", payload.item);
  },
  undoDataPostApproved(context, payload) {
    context.commit("undoDataPostApproved", payload.data);
  },
  undoDataPostwtbApproved(context, payload) {
    context.commit("undoDataPostwtbApproved", payload.data);
  },
  undoDataRecord(context, payload) {
    context.commit("undoDataRecord", payload.data);
  },
};
