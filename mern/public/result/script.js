
const xValues = [1,2,3,4,5,6,7,8,9,10,11,12,13,14];
const yValues = [3,2,3,1,2,4,2,2,3,3,2,4,3,2];
const barColors = ["red", "green","blue","orange","brown","grey","crimson","turquoise","violet","peach","chocolate","pink","khaki","magenta"];

new Chart("myChart", {
  type: "bar",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },
  options: {
    legend: {display: false},
    title: {
      display: true,
      text: "Questionaire"
    }
  }
});
const issue = document.querySelector(".health_issue");