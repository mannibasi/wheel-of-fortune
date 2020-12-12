const data = {
  response_code: {
    version: '1.2',
    termsofService: 'http://frontend.turing.io/projects/wheel-of-fortune.html',
    features: {
      wheel: 1,
      puzzles: 1
    },
  },
  wheel: [
    900,
    'BANKRUPT',
    2500,
    600,
    700,
    600,
    650,
    500,
    700,
    'BANKRUPT',
    600,
    550,
    500,
    600,
    'BANKRUPT',
    'LOSE A TURN',
    700,
    800,
    500,
    650,
    500,
    900
  ],
  puzzles: {
    one_word_answers: {
      date: 'Dec 12 2020',
      puzzle_bank: [
        {  
          category: '2020',
          number_of_words: 1,
          total_number_of_letters: 11,
          first_word: 11, 
          description:'Virus in response to which over 750 laptops have been rolled out to support remote working.',
          correct_answer: 'Coronavirus',
        },
        {  
          category: 'Automation',
          number_of_words: 1,
          total_number_of_letters: 7,
          first_word: 7, 
          description:'Technology/configuration language being used to help automate provisioning of IRESS MSO environments.',
          correct_answer: 'Ansible',
        }
      ]
    },
    two_word_answers: {
      date: 'Dec 12 2020',
      puzzle_bank: [
        {  
          category: 'Pandemic',
          number_of_words: 2,
          total_number_of_letters: 13,
          first_word: 3, 
          description:'Desktop technology rolled out across Call Centres and 3rd parties to support pandemic response.',
          correct_answer: 'AWS Workspaces',
        },
        {  
          category: 'ITP',
          number_of_words: 2,
          total_number_of_letters: 11,
          first_word: 6, 
          description:'Summit component that we managed to migrate successfully first time (through some great collaborative work!)',
          correct_answer: 'Oracle Forms',
        }
      ]
    },
    three_word_answers: {
      date: 'Dec 12 2020',
      puzzle_bank: [
        {  
          category: 'ITP',
          number_of_words: 3,
          total_number_of_letters: 32,
          first_word: 6, 
          description:'Project that saw 3000+ end user devices and servers migrated to a 2016 server solution, reducing support and security risks.',
          correct_answer: 'Active Directory Upgrade',
        }
      ]
    },
    four_word_answers: {
      date: 'Dec 12 2020',
      puzzle_bank: [
        {  
          category: 'Collaboration',
          number_of_words: 4,
          total_number_of_letters: 11,
          first_word: 4, 
          description:'Solution introduced to make joining "meetings" from home easier.',
          correct_answer: 'Zoom In A Room',
        }
      ]
    }
  }
};

if (typeof module !== 'undefined') {
  module.exports = data;
}