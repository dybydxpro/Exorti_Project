using System.ComponentModel.DataAnnotations;

namespace ABC_Marketing.Models
{
    public class Address
    {
        [Key]
        public int Id { get; set; }
        [Required]
        public int CustomerID { get; set; }
        [Required]
        public string AddLine1 { get; set; }
        [Required]
        public string AddLine2 { get; set; }
        [Required]
        public string City { get; set; }
        [Required]
        public string Province { get; set; }
        [Required]
        public string Country { get; set; }
        [Required]
        public int ZipCode { get; set; }
    }
}
