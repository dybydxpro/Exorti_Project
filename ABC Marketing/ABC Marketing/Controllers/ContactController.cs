using ABC_Marketing.Data;
using ABC_Marketing.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace ABC_Marketing.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ContactController : ControllerBase
    {
        private readonly AppDatabaseContext _db;

        public ContactController(AppDatabaseContext db)
        {
            _db = db;
        }

        [HttpGet]
        public async Task<ActionResult<List<AppDatabaseContext>>> Get()
        {
            return Ok(await _db.Contacts.ToListAsync());
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<List<AppDatabaseContext>>> Get(int id)
        {
            var address = _db.Contacts.Find(id);
            return Ok(address);
        }

        [HttpPost]
        public async Task<ActionResult<List<AppDatabaseContext>>> Post(Contact data)  //Dataset dataset
        {
            _db.Contacts.Add(data);
            await _db.SaveChangesAsync();
            return Ok(data);
        }

        [HttpPut]
        public async Task<ActionResult<List<AppDatabaseContext>>> Put(Contact data)
        {
            _db.Contacts.Update(data);
            _db.SaveChanges();
            return Ok(data);
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult<List<AppDatabaseContext>>> Delete(int? id)
        {
            var data = _db.Contacts.Find(id);
            _db.Contacts.Remove(data);
            await _db.SaveChangesAsync();
            return Ok(data);
        }

        [HttpGet("getByCustomerID/{id}")]
        public async Task<ActionResult<List<AppDatabaseContext>>> GetByCustomerID(int id)
        {
            IEnumerable<Contact> contact = _db.Contacts.Where(x => x.CustomerID == id);
            if (contact == null)
            {
                return NotFound();
            }
            return Ok(contact);
        }

        [HttpDelete("deleteByCustomerID/{id}")]
        public async Task<ActionResult<List<AppDatabaseContext>>> DeleteByCustomerID(int? id)
        {
            IEnumerable<Contact> data = _db.Contacts.Where(x => x.CustomerID == id);
            _db.Contacts.RemoveRange(data);
            await _db.SaveChangesAsync();
            return Ok(data);
        }
    }
}
