export const getCandidateProfile = (candidate) => {
  let profile = candidate.techno1;

  if (candidate.level1 !== candidate.level2) {
    profile += ` ${candidate.level1}`;
  }

  if (candidate.techno2) {
    profile += ` / ${candidate.techno2} ${candidate.level2}`;
  }

  return profile;
};
