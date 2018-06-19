new Vue({
  el: '#app',
  data: {
    isPlaying: false,
    your_health: 100,
    monster_health: 100,
    log: []
  },
  computed: {
    yourHealthMeter: function() {
      return { width: this.your_health + '%' }
    },
    monsterHealthMeter: function() {
      return { width: this.monster_health + '%' }
    },
    logRecord: function() {
      return this.log.reverse()
    }
  },
  methods: {
    toggleGame: function() {
      this.your_health = 100
      this.monster_health = 100
      this.log = []
      this.isPlaying = !this.isPlaying
    },
    attack: function() {
      var monsterDamage = this.calculateDamage(1, 15);
      var yourDamage = this.calculateDamage(1, 15);
      this.monster_health -= monsterDamage;
      this.your_health -= yourDamage;
      this.log.push({
        'monster-turn': yourDamage,
        'player-turn': monsterDamage
      });
      this.checkForWinner();
    },
    specialAttack: function() {
      var monsterDamage = this.calculateDamage(1, 25);
      var yourDamage = this.calculateDamage(1, 15);
      this.monster_health -= monsterDamage;
      this.your_health -= yourDamage;
      this.log.push({
        'monster-turn': yourDamage,
        'player-turn': monsterDamage
      });
      this.checkForWinner();
    },
    heal: function() {
      var healAmount = this.calculateDamage(1, 25);
      var yourDamage = this.calculateDamage(1, 15);
      this.your_health += healAmount
      this.your_health -= yourDamage
      this.log.push({
        'monster-turn': yourDamage,
        'player-heal': healAmount
      });
      this.checkForWinner();
    },
    giveUp: function() {
      this.toggleGame();
      alert('You gave up... The monster won!')
    },
    calculateDamage: function(min, max) {
      return Math.max(Math.floor(Math.random() * max) + 1, min);
    },
    checkForWinner: function() {
      if (this.monster_health <= 0) {
        if (confirm('You won! New Game?')) {
          this.toggleGame();
        } else {
          this.isPlaying = false
        }
        return true;
      } else if (this.your_health <= 0) {
        if (confirm('You lost! New Game?')) {
          this.toggleGame();
        } else {
          this.isPlaying = false
        }
        return true;
      }
      return false;
    }
  }
});
