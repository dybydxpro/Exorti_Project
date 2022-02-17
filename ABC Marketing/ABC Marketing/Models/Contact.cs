using System.ComponentModel.DataAnnotations;

namespace ABC_Marketing.Models
{
    public class Contact
    {
        [Key]
        public int Id { get; set; }
        [Required]
        public int CustomerID { get; set; }
        [Required]
        public string Number { get; set; }
    }
}
