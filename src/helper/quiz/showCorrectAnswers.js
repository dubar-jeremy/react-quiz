const showCorrectAnswers = (correctAnswer) => {
  correctAnswer.forEach((value) => {
    document.getElementById(value).classList.add('wrong');
  });
};

export default showCorrectAnswers;
