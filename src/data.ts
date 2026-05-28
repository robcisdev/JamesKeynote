/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { TimelineEvent, EnvironmentFactor, Scripture, Imperative } from "./types";

export const WHO_IS_JAMES_FACTS = [
  {
    title: "The Brother of Jesus",
    description: "Known as James the Just or the brother of the Lord. He was the literal half-brother of Jesus, growing up alongside Him in Nazareth.",
    scriptures: [
      { ref: "Matthew 13:55", text: "Is not this the carpenter’s son? Is not his mother called Mary? And are not his brothers James and Joseph and Simon and Judas?" },
      { ref: "Mark 6:3", text: "Is not this the carpenter, the son of Mary and brother of James and Joses and Judas and Simon? And are not his sisters here with us?" }
    ]
  },
  {
    title: "Transformed by the Resurrection",
    description: "Remarkably, during Jesus' earthly ministry, His brothers did not believe in Him. It was a personal post-resurrection appearance that completely transformed James from skeptic to leader.",
    scriptures: [
      { ref: "John 7:5", text: "For not even his brothers believed in him." },
      { ref: "1 Corinthians 15:7", text: "Then he appeared to James, then to all the apostles." }
    ]
  },
  {
    title: "Pillar of the Early Church",
    description: "James rose to become the chief leader of the Jerusalem mother church. He presided over the Jerusalem Council and was universally respected as a 'pillar' alongside Peter and John.",
    scriptures: [
      { ref: "Galatians 2:9", text: "And when James and Cephas and John, who seemed to be pillars, perceived the grace that was given to me, they gave the right hand of fellowship to Barnabas and me, that we should go to the Gentiles and they to the circumcised." },
      { ref: "Acts 15:13", text: "After they finished speaking, James replied, 'Brothers, listen to me.'" },
      { ref: "Galatians 1:19", text: "But I saw none of the other apostles except James the Lord’s brother." }
    ]
  },
  {
    title: "A Humble Servant",
    description: "Despite his unique family connection to the Savior of the world, James never boasted of physical kinship. He introduced his letter with humble, modest devotion.",
    scriptures: [
      { ref: "James 1:1", text: "James, a servant of God and of the Lord Jesus Christ, To the twelve tribes in the Dispersion: Greetings." }
    ]
  }
];

export const TIMELINE_EVENTS: TimelineEvent[] = [
  {
    year: "c. AD 4",
    title: "Birth of James",
    description: "Born and raised in Galilee; grows up as the half-brother of Jesus in Nazareth under Joseph and Mary's household.",
    badge: "Galilean Origins",
    sources: ["Matthew 13:55", "Mark 6:3"],
    fullScriptures: [
      { ref: "Matthew 13:55", text: "Is not this the carpenter’s son? Is not his mother called Mary? And are not his brothers James and Joseph and Simon and Judas?" },
      { ref: "Mark 6:3", text: "Is not this the carpenter, the son of Mary and brother of James and Joses and Judas and Simon? And are not his sisters here with us?" }
    ]
  },
  {
    year: "AD 30–33",
    title: "The Resurrection Appearance",
    description: "Initially skeptical of Jesus' ministry, James is transformed forever when the risen Christ appears to him individually.",
    badge: "The Turning Point",
    sources: ["John 7:5", "1 Corinthians 15:7"],
    fullScriptures: [
      { ref: "John 7:5", text: "For not even his brothers believed in him." },
      { ref: "1 Corinthians 15:7", text: "Then he appeared to James, then to all the apostles." }
    ]
  },
  {
    year: "AD 44",
    title: "Rise to Jerusalem Leadership",
    description: "Following the martyrdom of James the son of Zebedee and Peter's escape/departure, James the Just assumes central leadership of the Jerusalem church.",
    badge: "Pillar of Jerusalem",
    sources: ["Acts 12:2", "Acts 12:17", "Galatians 1:19"],
    fullScriptures: [
      { ref: "Acts 12:2", text: "He killed James the brother of John with the sword," },
      { ref: "Acts 12:17", text: "But motioning to them with his hand to be silent, he described to them how the Lord had brought him out of the prison. And he said, 'Tell these things to James and to the brothers.' Then he departed and went to another place." },
      { ref: "Galatians 1:19", text: "But I saw none of the other apostles except James the Lord’s brother." }
    ]
  },
  {
    year: "c. AD 45–49",
    title: "Composition of the Epistle",
    description: "James pens his pastoral letter to Jewish Christians scattered across the Roman Empire, making it one of the earliest written books in the New Testament.",
    badge: "First NT Book Written",
    sources: ["James 1:1"],
    fullScriptures: [
      { ref: "James 1:1", text: "James, a servant of God and of the Lord Jesus Christ, To the twelve tribes in the Dispersion: Greetings." }
    ]
  },
  {
    year: "AD 49",
    title: "Presiding Over the Jerusalem Council",
    description: "James serves as the lead moderator and judge at the historic counsel, ruling on Gentile integration into the church without circumcision requirements.",
    badge: "The Council Decree",
    sources: ["Acts 15:13", "Acts 15:19"],
    fullScriptures: [
      { ref: "Acts 15:13", text: "After they finished speaking, James replied, 'Brothers, listen to me.'" },
      { ref: "Acts 15:19", text: "Therefore my judgment is that we should not trouble those of the Gentiles who turn to God," }
    ]
  },
  {
    year: "AD 62",
    title: "Martyrdom in Jerusalem",
    description: "James is condemned by the high priest Ananus during an imperial power vacuum and is stoned to death/thrown from the temple pinnacle for refusing to deny Jesus.",
    badge: "Martyr's Crown",
    sources: ["Josephus, Antiquities 20.9.1"],
    fullScriptures: [
      { ref: "Josephus, Antiquities 20.9.1", text: "Ananus assembled the sanhedrin of judges, and brought before them the brother of Jesus, who was called Christ, whose name was James, and some others; and when he had formed an accusation against them as breakers of the law, he delivered them to be stoned." }
    ]
  }
];

export const ENVIRONMENT_FACTS: EnvironmentFactor[] = [
  {
    title: "The Dispersion (Diaspora)",
    iconName: "Compass",
    description: "His recipients were 'the twelve tribes in the Dispersion' — Jewish-background believers scattered across Syria, Asia Minor, and beyond, fleeing intense local persecutions.",
    evidence: {
      ref: "James 1:1",
      text: "James, a servant of God and of the Lord Jesus Christ, To the twelve tribes in the Dispersion: Greetings."
    }
  },
  {
    title: "Famine & Severe Poverty",
    iconName: "AlertTriangle",
    description: "The Roman world under Emperor Claudius experienced severe regional famines, driving the early Jerusalem and scattered Judean believers into extreme economic destitution.",
    evidence: {
      ref: "Acts 11:28",
      text: "And one of them named Agabus stood up and foretold by the Spirit that there would be a great famine over all the world (this took place in the days of Claudius)."
    }
  },
  {
    title: "Favoritism & Social Injustice",
    iconName: "Scale",
    description: "Poor believers faced exploitation by wealthy landowners. Wealthy elites were given preferential treatment inside assemblies, while the poor were dishonored and dragged to court.",
    evidence: {
      ref: "James 2:2–4",
      text: "For if a man wearing a gold ring and fine clothing comes into your assembly, and a poor man in shabby clothing also comes in, and if you pay attention to the one who wears the fine clothing and say, “You sit here in a good place,” while you say to the poor man, “You stand there,” or “Sit at my feet,” have you not then made distinctions among yourselves and become judges with evil thoughts?"
    }
  },
  {
    title: "Harsh Conflict & Gossip",
    iconName: "MessageSquare",
    description: "The pressure of poverty and persecution caused tension, leading to sharp words, backbiting, anger, and quarrels within the Christian house churches.",
    evidence: {
      ref: "James 3:9–10",
      text: "With it we bless our Lord and Father, and with it we curse people who are made in the likeness of God. From the same mouth come blessing and cursing. My brothers, these things ought not to be so."
    }
  }
];

export const CORE_VERSES: Scripture[] = [
  {
    id: "v1",
    reference: "James 1:2–4",
    text: "Count it all joy, my brothers, when you meet trials of various kinds, for you know that the testing of your faith produces steadfastness. And let steadfastness have its full effect, that you may be perfect and complete, lacking in nothing."
  },
  {
    id: "v2",
    reference: "James 1:22",
    text: "But be doers of the word, and not hearers only, deceiving yourselves."
  },
  {
    id: "v3",
    reference: "James 2:14",
    text: "What good is it, my brothers, if someone says he has faith but does not have works? Can that faith save him?"
  },
  {
    id: "v4",
    reference: "James 2:17",
    text: "So also faith by itself, if it does not have works, is dead."
  }
];

export const SPECIAL_FEATURES = [
  {
    title: "One of the Earliest Letters",
    stat: "AD 45–49",
    metric: "Date of Composition",
    description: "Written before the Jerusalem Council of AD 49, it represents a foundational, raw snapshot of earliest Jewish Christianity, prior to major Pauline theological debates."
  },
  {
    title: "Proverbs of the New Testament",
    stat: "High Wisdom",
    metric: "Literary Genre",
    description: "Utilizes Hebrew wisdom structures, sharp parallelism, vivid natural metaphors (waves of the sea, flowers in field, forest fire), and memorable direct declarations."
  },
  {
    title: "Incredible Command Density",
    stat: "54",
    metric: "Imperatives in 108 Verses",
    description: "Some scholars count up to 60. By any count, James averages one direct command for every two verses—higher than any other New Testament book. It focuses entirely on active response."
  },
  {
    title: "Blunt Pastoral Compass",
    stat: "No Filter",
    metric: "Tone & Voice",
    description: "Contains zero theological preambles, greetings of personal praise, or soft appeals. James addresses his audience with the authority and blunt directness of an Old Testament prophet."
  }
];

// Everett Storms Promise Study Data
export const PROMISE_STUDY_DATA = {
  investigator: "Everett R. Storms",
  title: "School Teacher",
  location: "Kitchener, Ontario, Canada",
  duration: "1.5 Years",
  readingCount: "27th Reading of the Bible",
  totalPromises: 8810,
  godToManPromises: 7487,
  insight: "While the Bible has 7,487 promises from God to comfort and guide man, James turns the focus around to human responsibility: calling us into active covenant duty with 54 direct imperatives in only 108 verses!"
};

export const SELECTED_IMPERATIVES: Imperative[] = [
  {
    id: "imp1",
    reference: "James 1:2",
    command: "Count it all joy when facing trials",
    verseQuote: "Count it all joy, my brothers, when you meet trials of various kinds,",
    category: "Trials & Perseverance"
  },
  {
    id: "imp2",
    reference: "James 1:5",
    command: "Ask God for wisdom",
    verseQuote: "If any of you lacks wisdom, let him ask God, who gives generously to all without reproach, and it will be given him.",
    category: "Humility & Community"
  },
  {
    id: "imp3",
    reference: "James 1:19",
    command: "Be quick to hear, slow to speak",
    verseQuote: "Know this, my beloved brothers: let every person be quick to hear, slow to speak, slow to anger;",
    category: "Speech & Tongue"
  },
  {
    id: "imp4",
    reference: "James 1:22",
    command: "Be doers of the word, not just hearers",
    verseQuote: "But be doers of the word, and not hearers only, deceiving yourselves.",
    category: "Trials & Perseverance"
  },
  {
    id: "imp5",
    reference: "James 2:1",
    command: "Show no partiality / favoritism",
    verseQuote: "My brothers, show no partiality as you hold the faith in our Lord Jesus Christ, the Lord of glory.",
    category: "Social Justice & faith"
  },
  {
    id: "imp6",
    reference: "James 3:1",
    command: "Restrain from becoming teachers lightly",
    verseQuote: "Not many of you should become teachers, my brothers, for you know that we who teach will be judged with greater strictness.",
    category: "Speech & Tongue"
  },
  {
    id: "imp7",
    reference: "James 4:7",
    command: "Submit to God; resist the devil",
    verseQuote: "Submit yourselves therefore to God. Resist the devil, and he will flee from you.",
    category: "Humility & Community"
  },
  {
    id: "imp8",
    reference: "James 4:11",
    command: "Do not speak evil against one another",
    verseQuote: "Do not speak evil against one another, brothers. The one who speaks against a brother or judges his brother, speaks evil against the law and judges the law. If you judge the law, you are not a doer of the law but a judge.",
    category: "Speech & Tongue"
  },
  {
    id: "imp9",
    reference: "James 5:12",
    command: "Let your 'yes' be yes and 'no' be no",
    verseQuote: "But above all, my brothers, do not swear, either by heaven or by earth or by any other oath, but let your “yes” be yes and your “no” be no, so that you may not fall under condemnation.",
    category: "Speech & Tongue"
  },
  {
    id: "imp10",
    reference: "James 5:16",
    command: "Confess your sins & pray for each other",
    verseQuote: "Therefore, confess your sins to one another and pray for one another, that you may be healed. The prayer of a righteous person has great power as it is working.",
    category: "Humility & Community"
  }
];
