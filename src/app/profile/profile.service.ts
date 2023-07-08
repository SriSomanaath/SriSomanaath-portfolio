import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  //baseUrl = environment.baseUrl;

  constructor(
    private http: HttpClient
  ) { }

  projects:any = [
    {
      id: 1,
      title: 'E-commerce webApp in Angular',
      desc: '',
      livedemo: '',
      githurl: 'https://github.com/SriSomanaath/https---github.com-SriSomanaath-EazyTrove.git',
      mediumlink: '',
      imgUrl: 'assets/images/E-commerce.png',
      tech: 'HTML5,CSS,Typescript,Angular 15'
    },

    {
      id: 2,
      title: 'Task-manager Using MEAN Stack',
      desc: '',
      livedemo: '',
      githurl: 'https://github.com/SriSomanaath/task-manager.git',
      mediumlink: '',
      imgUrl: 'assets/images/taskmanager.png',
      tech: ' Angular,Node,Express,MongoDB'
    },
    {
      id: 3,
      title: 'CNC Machine using Angular',
      desc: '',
      livedemo: '',
      githurl: 'https://github.com/SriSomanaath/task-manager.git',
      mediumlink: '',
      imgUrl: 'assets/images/CNCMachn.png',
      tech: 'HTML,CSS,Typescript,Angular15'
    }
    ,
    {
      id: 4,
      title: 'Contact-Management App',
      desc: '',
      livedemo: '',
      githurl: 'https://github.com/SriSomanaath/contact-management-app.git',
      mediumlink: '',
      imgUrl: 'assets/images/contactManagementApp.png',
      tech: 'Node.js,Express.js,APIs,MongoDB'
    }
  ]
  about2 = `
  Worked with Software Development Life Cycle(SDLC) and  agile methodologies .
  Expertise in Angular 2+ versions,Python,Javascript and UI with Responsive Designs .
  Have good understanding of Jquery, Bootstrap, InfluxDb,MongoDB`

  about = "Lover of innovation and everything related to generate new knowledge.Accept challenging situations and solve them as soon as possible. Very calculated about the time I spend and work I do."
  resumeurl = "https://drive.google.com/file/d/1bFhwU8Jz8AJPauliJtCIb__YqaU3KogF/view?usp=sharing"

  skillsData: any = [    
    {
      'id': '1',
      'skill': 'HTML',
      'progress': '80%',
      'icon': 'assets/images/html.png'
    },
    {
      'id': '2',
      'skill': 'CSS',
      'progress': '85%',
      'icon': 'assets/images/css.png'
    },
    {
      'id': '3',
      'skill': 'JAVASCRIPT',
      'progress': '80%',
      'icon': 'assets/images/js.png'
    },
    {
      'id': '4',
      'skill': 'TYPESCRIPT',
      'progress': '80%',
      'icon': 'assets/images/ts.png'
    },
    {
      'id': '5',
      'skill': 'ANGULAR 2+',
      'progress': '85%',
      'icon': 'assets/images/angular.png'
    },
    {
      'id': '6',
      'skill': 'NODE.JS',
      'progress': '70%',
      'icon': 'assets/images/nodejs.png'
    },
    {
      'id': '7',
      'skill': 'EXPRESS.JS',
      'progress': '70%',
      'icon': 'assets/images/express-js.png'
    },
    {
      'id': '8',
      'skill': 'MONGODB',
      'progress': '75%',
      'icon': 'assets/images/mongoDB.png'
    },
    {
      'id': '9',
      'skill': 'INFLUX DB',
      'progress': '75%',
      'icon': 'assets/images/influxGrafana.png'
    },
    {
      'id': '10',
      'skill': 'PYTHON',
      'progress': '70%',
      'icon': 'assets/images/python.png'
    }
  ];


  educationData: any = [
    {
      'id': '1',
      'from_to_year': '2019 - 2023',
      'education': 'Bachelor\'s Degree',
      'stream': 'Bachelor of Engineering',
      'institution': 'Sathyabama Institue of Science and Technology, Chennai , TamilNadu'
    },
    {
      'id': '2',
      'from_to_year': '2017 - 2019',
      'education': 'Higher Secondary',
      'stream': 'Science and Mathematics',
      'institution': 'Sasi Junior College',
    },
    {
      'id': '3',
      'from_to_year': '2016 - 2017',
      'education': 'Secondary  School',
      'stream': 'Science and Mathematics',
      'institution': 'Sasi Public School'
    }
  ];
  exprienceData: any = [
    {
      id: 4,
      company: 'Agneyas Labs',
      location: 'Bengaluru(INDIA)',
      timeline: 'Dec 2022 to Present',
      role: 'Full Stack Intern',
      work: `
      Developed multiple components in the Angular based web application using HTML,CSS,Typescript to make responsive web page . 
      Developed a dashboard component along with CSS animations which displays real time values received over UDP with its corresponding animations and also posts command requests to control the charging state . 
      Developed datatables using Ajax jquery and html tables using REST APIs through HTTP and Websocket requests to Python using Python Flask. Developed backend code for multiple components using Python to write 
      queries in InfluxDB database and various libraries such as OS, Threading, csv, logging, etc.for reports generation, downloading reports in local system, uploading files from local system, forming new insights using data.`
    }
  ]

  extraCircularInfo: any = [
    {
      id:1,
      title: 'Blogger',
      description: '',
      img: 'assets/images/Mehul Kothari – Medium1.png',
      url: 'https://mehulkothari05.medium.com/'
    },
    {
      id:1,
      title: 'Github',
      description: '',
      img: 'assets/images/Mehulkothari_github.png',
      url: 'https://github.com/mehulk05/'
    },
    {
      id:1,
      title: 'Freelancing',
      description: '',
      img: 'assets/images/mehul_freelancing.png',
      url: 'https://www.upwork.com/freelancers/~016d6f497a5629df4b'
    },
  ]
  // contactus(data: any): Observable<any> {
  //   return this.http.post(this.baseUrl + 'contact', data);
  // }

  skills(): Observable<any> {
    // return this.http.get(this.baseUrl + 'skills');
    return this.skillsData;
  }

  getProjects(): Observable<any> {
    // return this.http.get(this.baseUrl + 'skills');
    return this.projects;
  }
  education(): Observable<any> {
    // return this.http.get(this.baseUrl + 'education');
    return this.educationData;
  }

  exprience(): Observable<any> {
    // return this.http.get(this.baseUrl + 'exprience');
    return this.exprienceData;
  }

  extraCircular(): Observable<any> {
    // return this.http.get(this.baseUrl + 'exprience');
    return this.extraCircularInfo;
  }
}
